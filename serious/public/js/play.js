var play_state = {
	
	create: function() {
		game.physics.startSystem(Phaser.Physics.ARCADE);

	    game.stage.backgroundColor = '#00affee';

	    //add MapTiles 
	    map = game.add.tilemap('map');
	    map.addTilesetImage('tiles', 'tiles');

	    map.setCollisionBetween(0, 2);

	    layer = map.createLayer('Layer-1');
	    layer2 = map.createLayer('Layer-2');

	    //add MapCollisionBounds
	    //layer.debug = true;

	    //add Player and Playerphysics
	    p = game.add.sprite(32, 100, 'player');

	    game.physics.enable(p);

	    game.physics.arcade.gravity.y = 100;

	    p.body.bounce.y = 0.2;
	    p.body.linearDamping = 1;
	    p.body.collideWorldBounds = true;
	    p.animations.add('left', [0,1,2,3], 4, true)
	    p.animations.add('right', [8,9,10,11], 4, true)
	    p.animations.add('idle', [4,5,6,7], 2, true)
	    p.animations.add('jump', [12,13,14,15], 4, true)


	    game.camera.follow(p);

	    cursors = game.input.keyboard.createCursorKeys();


	},

	update: function () {
		game.physics.arcade.collide(p, layer);

	    p.body.velocity.x = 0;

	    if (cursors.left.isDown)
	    {
	        p.body.velocity.x = -200;
	    	p.animations.play('left');
	    }
	    else if (cursors.right.isDown)
	    {
	        p.body.velocity.x = 200;
	    	p.animations.play('right');
	    	if (cursors.up.isDown){
		        if (p.body.onFloor())
		        {
	    			p.animations.play('jump');
		            p.body.velocity.y = -200;
		        }
	    	}
	    }else if (cursors.up.isDown)
	    {
	        if (p.body.onFloor())
	        {
	    		p.animations.play('jump');
	            p.body.velocity.y = -200;
	        }
	    }else{
	    	p.animations.play('idle');
	    }
	}
}