// Hud Element
game.ScoreObject = me.HUD_Item.extend({
    init: function(x, y) {
        // call the parent constructor
        this.parent(x, y);
        // create a font
        this.hudfont = new me.Font("PTSans",12,"white","left");
    },
 
    draw: function(context, x, y) {
        this.hudfont.draw(context, this.value, this.pos.x + x, this.pos.y + y);
    }
 
});


//player entity
game.PlayerEntity = me.ObjectEntity.extend({

	init: function(x,y,settings){
		this.parent(x,y,settings);
		
		//speed (x ,y)
		this.setVelocity(4,10)

        //collision box size
        this.updateColRect(8, 48, 0, 48);
        //camera follow
		me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
	},

	update: function() {
        var leftright;
        if (me.input.isKeyPressed('speed')) {
            //run forest run
            this.setVelocity(7,16);
        }else if (me.input.isKeyPressed('left')) {
            // flip the sprite on horizontal axis
            this.flipX(true);
            leftright = true;
            // update the entity velocity
            this.vel.x -= this.accel.x * me.timer.tick;
        } else if (me.input.isKeyPressed('right')) {
            // unflip the sprite
            this.flipX(false);
            leftright = false;
            // update the entity velocity
            this.vel.x += this.accel.x * me.timer.tick;
        } else {
            this.vel.x = 0;
            this.setVelocity(4,10);
        }
        if (me.input.isKeyPressed('jump')) {
            // make sure we are not already jumping or falling
            if (!this.jumping && !this.falling) {
                // set current vel to the maximum defined value
                // gravity will then do the rest
                this.vel.y = -this.maxVel.y * me.timer.tick;
                // set the jumping flag
                this.jumping = true;
                me.audio.play("jump");
            }
        }
        if (me.input.isKeyPressed('shoot')){
            if (leftright){
                shot = new bullet(this.pos.x-40, this.pos.y+15, { image: 'shoot', spritewidth: 64 }, leftright);
            }else{
                shot = new bullet(this.pos.x+40, this.pos.y+15, { image: 'shoot', spritewidth: 64 }, leftright);

            } 
            me.game.add(shot, this.z);
            me.audio.play("fire");
            me.game.sort();
        }
 
        // check & update player movement
        this.updateMovement();

        // check for collision
        var res = me.game.collide(this);
        if (res) {
        // if we collide with an enemy
            if (res.obj.type == me.game.ENEMY_OBJECT) {
                // check if we jumped on it
                if ((res.y > 0) && ! this.jumping) {
                    // bounce (force jump)
                    this.falling = false;
                    this.vel.y = -this.maxVel.y * me.timer.tick;
                    // set the jumping flag
                    this.jumping = true;

     
                } else {
                    // let's flicker in case we touched an enemy
                    this.renderable.flicker(15);
                    me.game.HUD.updateItemValue("live", -1);
                    var live = me.game.HUD.getItemValue("live");
                    if (live < 0) {
                        me.state.change(me.state.GAMEOVER);
                    }
                }
            }
         }
        // update animation if necessary
        if (this.vel.x!=0 || this.vel.y!=0) {
            // update object animation
            this.parent();
            return true;
        }
         
        // else inform the engine we did not perform
        // any update (e.g. position, animation)
        return false;
    }
})

/*----------------
 a Coin entity
------------------------ */
game.CoinEntity = me.CollectableEntity.extend({
    // extending the init function is not mandatory
    // unless you need to add some extra initialization
    init: function(x, y, settings) {
        // call the parent constructor
        this.parent(x, y, settings);
    },
 
    // this function is called by the engine, when
    // an object is touched by something (here collected)
    onCollision: function() {
        // do something when collected
        me.audio.play("cling");
        me.game.HUD.updateItemValue("live", 10);
        // make sure it cannot be collected "again"
        this.collidable = false;
        // remove it
        me.game.remove(this);
    }
});

/*shoot entity*/

var bullet = me.ObjectEntity.extend({   

    init: function(x,y,settings, direction){
            this.parent(x,y,settings);
            this.collidable = true;
            this.gravity = 0;
            this.direction = direction;
            },

    update: function () {
        if (!this.visible){
            me.game.remove(this);
        }
        //collision with enemy
        var res = me.game.collide(this);
        if (res){
            if (res.obj.type == me.game.ENEMY_OBJECT) {
                res.obj.ishit += 1;
                me.game.remove(this);
                if (res.obj.ishit > 3){
                    me.game.remove(res.obj);
                }
            }  
        }
        //remove bullet on collision with walls 
        var collision = this.updateMovement(); 
        if (collision.yprop.isSolid){
            me.game.remove(this);
        } 
        if (collision.xprop.isSolid){
            me.game.remove(this);
        }         

        //direction of bullet
        if (this.direction){
            this.vel.x -= 1.2; 
        } else{
            this.vel.x += 1.2;
        }

        setTimeout(function(){
            me.game.remove(this);
        },300);

        this.updateMovement();
        return true;
    }
});

//ememy

game.EnemyEntity = me.ObjectEntity.extend({

    init: function(x,y,settings){

        settings.image = "gir";
        settings.spritewidth = 64;

        this.parent(x,y,settings);
        this.startX = x;
        this.endX = x + settings.width - settings.spritewidth;

        this.pos.x = x + settings.width - settings.spritewidth;
        this.walkLeft = true;

        this.updateColRect(8, 48, 0, 48);

        this.setVelocity(4, 6);

        this.collidable = true;

        this.type = me.game.ENEMY_OBJECT;
        this.ishit = 0;
    },
    onCollision: function(res, obj){

    },
    update: function() {
        // do nothing if not in viewport
        if (!this.visible){
            return false;
        }
 
        if (this.alive) {
            if (this.walkLeft && this.pos.x <= this.startX) {
                this.walkLeft = false;
            } else if (!this.walkLeft && this.pos.x >= this.endX) {
                this.walkLeft = true;
            }
            // make it walk
            this.flipX(this.walkLeft);
            this.vel.x += (this.walkLeft) ? -this.accel.x * me.timer.tick : this.accel.x * me.timer.tick;
                 
        } else {
            this.vel.x = 0;
        }
         
        // check and update movement
        this.updateMovement();
         
        // update animation if necessary
        if (this.vel.x!=0 || this.vel.y!=0) {
            // update object animation
            this.parent();
            return true;
        }
        return false;
    }

});
