//
// Copyright 2013 Joshua C. Shepard
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
(function()
{
"use strict";

	var player_states = [
		{
			'name' : 'idle',
			'initial' : true,
			'events' :
			{
				'left' : 'walking',
				'right' : 'walking',
				'jump' : 'jumping',
				'hit' : 'stunned',
				'startchallenge' : 'challenge',
				'startclimbing' : 'climbing',
				'startstop' : 'stop',
				'openBackpack' : 'openBackpack',
				'showMap' : 'showMap',
			}
		},
		{
			'name' : 'walking',
			'events' :
			{
				'stop' : 'idle',
				'jump' : 'jumping',
				'fall' : 'falling',
				'hit' : 'stunned',
				'talk' : 'talking',
				'startchallenge' : 'challenge',
				'startstop' : 'stop',
				'startwalljump' : 'walljump',
			}
		},
		{
			'name' : 'jumping',
			'events' :
			{
				'land' : 'recovering',
				'hit' : 'stunned',
				'startchallenge' : 'challenge',
				'startstop' : 'stop',
				'startwalljump' : 'walljump',
				'stop' : 'idle',
				'goLeft' : 'walking',
				'goRight' : 'walking',
				'fall' : 'falling'
			}
		},		
		{
			'name' : 'walljump',
			'events' :
			{
				'land' : 'recovering',
				'jump' : 'jumping',
				'hit' : 'stunned',
				'startchallenge' : 'challenge',
				'startstop' : 'stop',
				'startwalljump' : 'walljump',
				'goLeft' : 'walking',
				'goRight' : 'walking',
				'stop' : 'idle',
				'fall' : 'falling'
			}
		},
		{
			'name' : 'recovering',
			'events' :
			{
				'recover' : 'idle'
			}
		},
		{
			'name' : 'falling',
			'events' : 
			{
				'land' : 'idle',
				'startchallenge' : 'challenge',
				'startstop' : 'stop',
				'startwalljump' : 'walljump',
				'stop' : 'idle',
				'hit' : 'stunned'
			}
		},
		{
			'name' : 'stunned',
			'events' :
			{
				'recover' : 'idle',
				'hit' : 'stunned'
			}
		},
		{
			'name' : 'challenge',
			'events':
			{
				'end':'idle',
				'startstop':'stop',
			}
		},
		{
			'name' : 'openBackpack',
			'events':
			{
				'closeBackpack':'stop',
			}
		},
		{
			'name' : 'showMap',
			'events':
			{
				'closeMap':'stop',
			}
		},
		{
			'name' : 'washit',
			'events':
			{
				'end':'idle',
			}
		},
		{
			'name' : 'stop',
			'events':
			{
				'end':'idle',
			}
		}
	];

	MyGame.Player = function ( game, name, x, y, width, height, props )
	{
		Nadion.BaseSprite.call( this, game, 'player', name, x, y, width, height, props );

		// fields
		var game_state = this.game.state.states[this.game.state.current];
		this.facing = Phaser.RIGHT;

		this.time = game.time;
		this.fsm = new Nadion.StateMachine( player_states, this );
		this.jump_increment = 600;
		this.walk_velocity = 110;
		this.live = 10;
		$('#live').html('Energie: ' + this.live);
		this.recovery_timeout = 500;		
		this.climb_timeout = 50;
		this.stunned_timeout = 500;
		this.challengeTimeout = 200;
		this.challengeTimer = 200;
		this.noise = this.game.add.audio( 'step', 1, true );
		this.jumpnoise = this.game.add.audio( 'jump', 1, true );
		this.slidenoise = this.game.add.audio( 'slide', 1, true );
		this.is_player_sprite = true;
		this.timer = 0;
		this.soundtimer = 0;

		this.backpack;
		this.challengetype;

		// Phaser.Sprite settings
		this.body.collideWorldBounds = true;
		this.body.width = 32;
		this.body.gravity.y = 900;
		this.body.maxVelocity.y = this.jump_increment;
		this.animations.add( 'jump-left', [32], 1, true );
		this.animations.add( 'jump-right', [32], 1, true );
		this.animations.add( 'left', [39,38,37,36,35,34], 8, true );
		this.animations.add( 'right', [39,38,37,36,35,34], 8, true );
		this.animations.add( 'run', [31,30,29,28,27,26,25,24,23], 14, true );
		this.body.drag = 600;
		$('#text').slideUp(1500);

		game.add.existing( this );
	};
	MyGame.Player.prototype = Object.create( Nadion.BaseSprite );
	Nadion.__extends( MyGame.Player, Nadion.BaseSprite );
	MyGame.Player.prototype.constructor = MyGame.Player;

	// prototype (methods)
	MyGame.Player.prototype.reset = function()
	{
		this.x = this.initial_x;
		this.y = this.initial_y;
		this.body.velocity.x = 0;
		this.body.velocity.y = 0;
		this.facing = Phaser.RIGHT;
		this.stunned_timer = 0;
		this.body.velocity.x = 0;
		this.body.velocity.y = 0;
		this.fsm.reset();
	};










// Collide with Tiles



	MyGame.Player.prototype.spriteCollisionCallback = function( p, s )
	{


		if( s instanceof MyGame.Enemy || s instanceof MyGame.Walker || s instanceof MyGame.Fire)
		{
			this.hit();
			
		}
			
		if( s instanceof MyGame.Shaman )
		{
			s.fsm.consumeEvent(s.state);
			this.renderText(s.talk);
			this.fsm.consumeEvent('startstop');
			s.destroy();
		}
			
			


	
		if( s instanceof MyGame.Pickup ){
			this.backpack = s;
			MyGame.counter = 0;
			MyGame.timeout = 120;
			
			s.destroy();
			
			this.fsm.consumeEvent('stop');
			this.fsm.consumeEvent('openBackpack');
			/*this.fsm.consumeEvent('startstop');*/
		}	

		if( s instanceof MyGame.Challenge ){
			if(this.backpack === undefined)
			{
				if(this.facing === 1)
				{
					this.body.velocity.x = 200;
				}else{
					this.body.velocity.x = -200;
				}
				this.renderText('Suche das Bild das dir den Weg weist <br> (weiter mit <span class="button"> Enter </span)');
				this.loseLevel();
			}else if(this.backpack.pictureType !== s.challengetype)
			{
				if(this.facing === 1)
				{
					this.body.velocity.x = 200;
				}else{
					this.body.velocity.x = -200;

				}
				this.renderText('Dein Bild erfüllt nicht das Gesetz:' +s.challengetype + ' <br> <br> <img src="assets/img/Gestaltgesetze/'+this.backpack.picture+'.png" style="">   <br>  du bist leider auf dem falschen Weg! <br> Suche ein Tor auf einer anderen Ebene <br>(weiter mit <span class="button"> Enter </span)');
				MyGame.mistakes = MyGame.mistakes +1;
				this.fsm.consumeEvent('startchallenge');
			}
			else{
				this.renderText('Du bist auf dem Richtigen Weg. Dein Bild erfüllt das Gesetz <b> ' + s.challengetype + ' </b> <br> <img src="assets/img/Gestaltgesetze/'+this.backpack.picture+'.png" style=""> <br> (weiter mit <span class="button"> Enter </span)');
				s.destroy();
				this.backpack = undefined; 
				this.fsm.consumeEvent('startstop');
				MyGame.taskTimes.push(MyGame.counter);
				MyGame.counter = 0;
				MyGame.timeout = 999;


			}
		}
			
	};


































	MyGame.Player.prototype.updateObject = function()
	{
		
		var game_state = this.game.state.states[this.game.state.current];
		// collide player with tilemap layers that are marked 'solid'
		for( var i = 0; i < game_state.layers.length; i++ )
		{
			var lyr = game_state.layers[i];
			if( lyr.solid )
				this.game.physics.collide( this, lyr );
		}

		// collide with sprites that are 'solid'
		for( i = 0; i < game_state.groups.length; i++ )
		{
			this.game.physics.collide( this, game_state.groups[i], this.spriteCollisionCallback, null, this );
		}
		
		// handle input
		var left = this.game.input.keyboard.isDown( MyGame.KEY_L ); 
		var right = this.game.input.keyboard.isDown( MyGame.KEY_R ); 
		var run = this.game.input.keyboard.isDown( MyGame.KEY_RUN );
		var jump = this.game.input.keyboard.isDown( MyGame.KEY_JUMP ); 
		var jump2 = this.game.input.keyboard.isDown( MyGame.KEY_JUMP2 ); 
		var openBackpack = this.game.input.keyboard.isDown( MyGame.KEY_BACKPACK ); 
		var showMap = this.game.input.keyboard.isDown( MyGame.KEY_MAP ); 
		var action = this.game.input.keyboard.isDown( MyGame.KEY_ACTION ); 
		var reset = this.game.input.keyboard.isDown( MyGame.KEY_RESET ); 
		var q1 = this.game.input.keyboard.isDown( MyGame.KEY_Q1 ); 
		var q2 = this.game.input.keyboard.isDown( MyGame.KEY_Q2 ); 
		var state = this.fsm.getState();
		if (reset){this.loseLevel();}
		if(MyGame.globalcounter > 600 && MyGame.midtest || MyGame.levelinfo === "Level-7" && MyGame.midtest || q1)
		{
			var midQuestionTrigger = $.grep(game_state.triggers, function(n){
			return(n.name === "Midquestions") 

			});
			MyGame.timeout = 999;
			midQuestionTrigger[0].activate();
			MyGame.midtest = false;
		}
		if(MyGame.globalcounter > 1200 || q2)
		{
			var endQuestionTrigger = $.grep(game_state.triggers, function(n){
			return(n.name === "Endtrigger") 
			});
			MyGame.timeout = 999;
			endQuestionTrigger[0].activate();
		}
		if ( reset ){this.loseLevel();}
		if ( (MyGame.counter > MyGame.timeout )){
			MyGame.counter = 0;
			this.renderText('Du warst leider zu langsam <br> Das Bild kehrt an seinen Schrein zurück!');
			this.loseLevel();
		}

		switch( state )
		{
		
		case 'walking':
		
				if( jump || jump2)
				{

					this.fsm.consumeEvent( 'jump'  );
				}	

				else if( left && run)
				{
					if(this.body.blocked.left && !this.body.blocked.down)
					{
						this.fsm.consumeEvent( 'startwalljump' );
					}else{	
						if(this.waitTime(this.soundtimer, 355))
						{
							this.playSound(this.noise);
						}				
						this.jump_increment = 450;
						this.walk_velocity = 230;
						this.animations.play('run');
						this.goLeft();
					}
				}

				else if( right && run )
				{

					if(this.body.blocked.right && !this.body.blocked.down)
					{
						this.fsm.consumeEvent( 'startwalljump' );
					}else{		
						this.animations.play( 'run' );
						if(this.waitTime(this.soundtimer, 355))
						{
							this.playSound(this.noise);
						}			
						this.jump_increment = 450;
						this.walk_velocity = 230;
						this.goRight();
					}
				}

				else if( left )
				{

					this.animations.play( 'left' );
					if(this.waitTime(this.soundtimer, 420))
					{
						this.playSound(this.noise);
					}
					if(this.body.blocked.left && !this.body.blocked.down)
					{
						this.fsm.consumeEvent( 'startwalljump' );
					}else{					
						this.jump_increment = 350;
						this.walk_velocity = 110;
						this.goLeft();
					}
				}


				else if( right )
				{
					this.animations.play( 'right' );
					if(this.waitTime(this.soundtimer, 420))
					{
						this.playSound(this.noise);
					}
					if(this.body.blocked.right && !this.body.blocked.down)
					{
						this.fsm.consumeEvent( 'startwalljump' );
					}else{					
						this.jump_increment = 350;
						this.walk_velocity = 110;
						this.goRight();
					}

				}
				else
				{
					this.fsm.consumeEvent( 'stop' );
				}
			
			break;





		case 'jumping':
		case 'falling':
			// reset horizontal velocity
			this.body.velocity.x = 0;

			// land?
			if( this.body.touching.down || this.body.blocked.down )
			{
				this.fsm.consumeEvent( 'land' );
			}
			// can move side to side
			if( left )
				if(this.body.blocked.left)
				{
					this.fsm.consumeEvent('startwalljump');
				}else{
					this.airborneLeft();
					
				}
			else if( right )
				if(this.body.blocked.right)
				{
					this.fsm.consumeEvent('startwalljump');
				}else{
					this.airborneRight();
					
				}
			break;

		case 'walljump':
			// reset horizontal velocity
			this.jump_increment = 450
			this.body.velocity.x = 0;
			this.body.velocity.y = 30;
			this.body.gravity.y = 1000;		
			this.frame = 33;	
			// land?
			if((jump && right && left )||(jump2 && right && left ) ){
				break;
			}
			else if( jump && right || (jump2 && right ))		
			{
				if(this.facing === 1)
				{
					this.jump_increment = 450;
					this.walk_velocity = 230;
					this.jump();
					this.fsm.consumeEvent('jump');
					break;
				}
			}else if( (jump && left) || (jump2  && left ))		
			{
				if(this.facing === 2 )
				{
					this.jump_increment = 450;
					this.walk_velocity = 230;
					this.jump();
					this.fsm.consumeEvent('jump');
					break;
				}
			}
			else if( left )
			{	
				if(this.facing === 1 ){
					this.walk_velocity = 0;
					this.body.velocity.y = 20;			
				}else{
					this.jump_increment = 450;
					this.walk_velocity = 230;
					this.airborneRight();
					this.fsm.consumeEvent('jump');

				}	
				break;
			}			
			else if( right )
			{	
				if(this.facing === 2 ){
					this.walk_velocity = 0;
					this.body.velocity.y = 20;			
				}else{
					this.jump_increment = 450;
					this.walk_velocity = 230;
					this.airborneLeft();
					this.fsm.consumeEvent('jump');

				}	
				break;
			}
			else{
				
				this.fsm.consumeEvent('stop');
				break;
			}
			break;





		case 'idle':
			// reset horizontal velocity
			this.body.velocity.x = 0;
			this.walk_velocity = 110;
			this.jump_increment = 350;
			this.body.gravity.y = 1000;
			// can walk or jump
			if( jump || jump2)
				this.fsm.consumeEvent( 'jump' );
			
			else if( left )
			{
				this.facing = Phaser.LEFT;
				this.fsm.consumeEvent( 'left' );
			}
			else if( right )
			{
				this.facing = Phaser.RIGHT;
				this.fsm.consumeEvent( 'right' );
			}
			else if ( openBackpack )
			{
				this.fsm.consumeEvent( 'openBackpack' );
			}
			
			else if ( showMap )
			{
				this.fsm.consumeEvent( 'showMap' );
			}
			
			break;






		case 'openBackpack':
	
			this.fsm.consumeEvent( 'closeBackpack' );
			break;
		
		case 'showMap':
			
			this.fsm.consumeEvent( 'closeMap' );
			break;



		case 'challenge':
			if(this.waitTime(this.timer, 400))
			{
				this.fsm.consumeEvent('startstop');
				
			}
			break;
		case 'stunned':
			if(this.waitTime(this.timer, 800))
			{
				this.fsm.consumeEvent('recover');
			}
			break;
		case 'stop':
			if( action )
			{
				$('#text').slideUp(500);		
				this.fsm.consumeEvent('end');
			}
			break;
		default:
			break;
		}
	};

































	MyGame.Player.prototype.openBackpack = function()
	{
		var content = "Der Rucksack ist Leer (weiter mit <span class='button'> Enter </span>)"
		if (this.backpack !== undefined)
		{
			content = '<img src="assets/img/Gestaltgesetze/'+this.backpack.picture+'.png" style=""> <br> (weiter mit <span class="button"> Enter </span>)' 
		}
		$('#text').html(content);
		$('#text').slideDown(500);

	};

	MyGame.Player.prototype.showMap = function()
	{
		var content = '<img src="assets/img/map.png" style=""> <br> (weiter mit <span class="button"> Enter </span>)' 
		$('#text').html(content);
		$('#text').slideDown(500);

	};




	MyGame.Player.prototype.challenge = function()
	{
		this.timer = this.time.now;
	};

	MyGame.Player.prototype.washit = function()
	{
		this.timer = this.time.now;
	};	
	MyGame.Player.prototype.stop = function()
	{
		this.body.velocity.x = 0;
	};



	MyGame.Player.prototype.hit = function()
	{
		// can't be hit while already stunned
		if( this.fsm.getState() != 'stunned' )
		{
			this.fsm.consumeEvent( 'hit' );
			//this.live= this.live -1;
			MyGame.hits = MyGame.hits +1;
			$('#live').html('Energie: ' + this.live);
		}
		if( this.body.touching.right )
		{
			this.body.velocity.x = -150;
			this.body.touching.right = false;
		}
		else if( this.body.touching.left )
		{
			this.body.velocity.x = 150;
			this.body.touching.left = false;
		}
		if( this.body.touching.down )
		{
			this.body.velocity.y = -350;
			this.body.touching.down = false;
		}
		else if( this.body.touching.up )
		{
			if(this.facing === 1){
				this.body.velocity.x = 300;
			}else{
				this.body.velocity.x = -300;
			}
			this.body.touching.up = false;
		}

	};












	MyGame.Player.prototype.idle = function()
	{
		this.animations.stop();
		this.frame = 36;
		if( this.facing == Phaser.LEFT )
		{
			this.scale.x = -1;
		}
		else
		{
			this.scale.x = 1;
		}
	};
	MyGame.Player.prototype.walking = function()
	{
		if( this.facing == Phaser.LEFT )
		{
			this.walkLeft();
		}
		else
		{
			this.walkRight();
		}
	};



	MyGame.Player.prototype.jumping = function()
	{
		this.jump();
	};

	MyGame.Player.prototype.walljump = function()
	{
		this.animations.stop();
		this.frame = 33;
	}
	MyGame.Player.prototype.falling = function()
	{
		this.frame = 33;
	};
	MyGame.Player.prototype.recovering = function() 
	{
		this.timer = this.time.now;
		this.fsm.consumeEvent( 'recover' );
	};
	MyGame.Player.prototype.stunned = function() 
	{
		// start timer
		this.timer = this.time.now;
		this.frame = 3;

		if( this.facing == Phaser.LEFT )
		{
			this.scale.x = -1;

		}
		else
		{
			this.scale.x = 1;
		}
	};



	// start walking right
	MyGame.Player.prototype.walkRight = function()
	{
		this.body.velocity.x = this.walk_velocity;
		this.scale.x = 1;
		this.animations.play( 'right' );
	};	

	MyGame.Player.prototype.runRight = function()
	{
		this.body.velocity.x = this.walk_velocity;
		this.scale.x = 1;
		this.animations.play( 'run' );
	};
	MyGame.Player.prototype.runLeft = function()
	{
		this.body.velocity.x = this.walk_velocity;
		this.scale.x = -1;
		this.animations.play( 'run' );
	};

	// start walking left
	MyGame.Player.prototype.walkLeft = function()
	{
		this.body.velocity.x = -this.walk_velocity;
		// flip on x axis
		this.scale.x = -1;
		this.animations.play( 'left' );
	};



	MyGame.Player.prototype.climbing = function(){
		
		this.timer = this.time.now;
	};	
	
	MyGame.Player.prototype.stepup = function(){
		this.body.velocity.y = -this.walk_velocity;
	};	

	// move in air (jump/fall) right
	MyGame.Player.prototype.airborneRight = function()
	{
		this.goRight();
	};

	// move in air (jump/fall) left
	MyGame.Player.prototype.airborneLeft = function()
	{
		this.goLeft();
	};
	// move right
	MyGame.Player.prototype.goRight = function()
	{
		this.scale.x = 1;
		this.facing = Phaser.RIGHT;
		this.body.velocity.x = this.walk_velocity;
	};

	// move left
	MyGame.Player.prototype.goLeft = function()
	{
		// flip on x axis
		this.scale.x = -1;
		this.facing = Phaser.LEFT;
		this.body.velocity.x = -this.walk_velocity;
	};

	MyGame.Player.prototype.jump = function()
	{
		this.body.velocity.y = -this.jump_increment;
		this.body.blocked.down = false;
		this.body.touching.down = false;
		// what direction are we facing
		if( this.facing == Phaser.LEFT )
		{
		// flip on x axis
			this.scale.x = -1;
			this.animations.play( 'jump-left' );
		}
		else
		{
			this.scale.x = 1;
			this.animations.play( 'jump-right' );
		}
	};

 	// helper Gestaltgesetze
 	MyGame.Player.prototype.waitTime = function(timer , time)
 	{
 		return this.time.elapsedSince( timer ) > time;
 	};
 	MyGame.Player.prototype.renderText = function(text)
 	{
 		$('#text').html(text);
		$('#text').slideDown(500);
 	};

 	MyGame.Player.prototype.playSound = function( sound )
 	{
 		this.soundtimer = this.time.now;
 		sound.play( '', 0, 1 );
 	};

 	MyGame.Player.prototype.loseLevel = function(text)
 	{
 		var datanotsend = true; 
 		var game_state = this.game.state.states[this.game.state.current];
 		game_state.triggers.forEach(function(t){
 			if(t instanceof MyGame.DataTrigger && datanotsend){
 				if(t.name === 'CollectData'){
 					t.activate();
 					datanotsend = false;
 					
 				}
 			}
 			if(t instanceof Nadion.NextLevelTrigger){
 				if(t.name === 'ResetTrigger')
 				{
 					t.activate();
					$('#live').html('Energie: 10');
					$('#info').html('');

 				}
 			}
 		})
 	};

})();

