// enemy sprite for Nadion template game
// (entities extend 'Phaser.Sprite')
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

	///////////////////////////////////////////////////////////////////
	// ENEMY
	///////////////////////////////////////////////////////////////////
	var enemy_states = [
		{
			'name' : 'idle',
			'initial' : true,
			'events' :
			{
				'jump' : 'jumping',
				'walk' : 'walking'
			}
		},
		{
			'name' : 'jumping',
			'events' :
			{
				'stop' : 'idle',
				'jump' : 'jumping'
			}
		},
		{
			'name' : 'walking',
			'events' :
			{
				'stop' : 'idle'
			}
		}
	];
	MyGame.Enemy = function( game, name, x, y, width, height, props )
	{
		Nadion.BaseSprite.call( this, game, 'fighter', name, x, y, width, height, props );

		// fields
		this.fsm = new Nadion.StateMachine( enemy_states, this );
		this.jumpVelocity = +(props['jumpVelocity'] || 600);
//		this.jumpVelocity = 200;
		this.time = this.game.time;
		this.idle_time = this.time.now;
		this.idlePeriod = +(props['idlePeriod'] || 1500);
		this.walkSpeed = +(props['walkSpeed'] || 50);;
		this.enemyType = (props['enemyType' || 'jumper']);


		// sprite fields
		this.body.bounce.y = 0.0;
		this.body.collideWorldBounds = true;
//		this.body.gravity.y = 20;
		this.body.gravity.y = 1000;
		this.body.maxVelocity.y = 1000;
		this.body.velocity.x = 0;
	};
	MyGame.Enemy.prototype = Object.create( Nadion.BaseSprite );
	Nadion.__extends( MyGame.Enemy, Nadion.BaseSprite );
	MyGame.Enemy.prototype.constructor = MyGame.Enemy;

	// prototype (methods)
	MyGame.Enemy.prototype.reset = function()
	{
		this.idle_time = this.time.now;
		this.x = this.initial_x;
		this.y = this.initial_y;
		this.body.velocity.x = 0;
		this.body.velocity.y = 0;
		this.fsm.reset();
	};

	// state machine event handlers:
	MyGame.Enemy.prototype.idle = function()
	{
		this.frame = 0;
		// reset idle timer
		this.idle_time = this.time.now;
	};
	MyGame.Enemy.prototype.jumping = function()
	{
		this.frame = 1;
		this.body.velocity.y = -this.jumpVelocity;
		this.body.blocked.down = false;
		this.body.touching.down = false;
	};	

	MyGame.Enemy.prototype.walking = function()
	{
		this.body.velocity.x = this.walkSpeed;
	};

	MyGame.Enemy.prototype.updateObject = function()
	{
		// collide with the tilemap layer
		var game_state = this.game.state.states[this.game.state.current];
		this.game.physics.collide( this, game_state.main_layer );
		

		var state = this.fsm.getState();
		if(this.enemyType === 'jumper')
		{
			this.body.velocity.x = 0;
			switch( state )
			{
			case 'jumping':
				// can keep jumping or stop
				// if we landed (on something), stop
				if( this.body.touching.down || this.body.blocked.down )
				if( this.body.touching.down || this.body.blocked.down )
					this.fsm.consumeEvent( 'stop' );
				break;
			case 'idle':
				// can jump or remain idle
				if( this.time.elapsedSince( this.idle_time ) > this.idlePeriod )
					this.fsm.consumeEvent( 'jump' );
				break;
			default:
				break;
			}
		}else if(this.enemyType === 'walker')
		{
			switch( state )
			{
				case 'idle':
					this.fsm.consumeEvent( 'walk' );
					break;
				case 'walking':
					if( this.time.elapsedSince( this.idle_time ) > this.idlePeriod )
					{
						this.body.velocity.x = -this.body.velocity.x;
						this.idle_time = this.time.now;
					}

			}
		}

	};

})();



