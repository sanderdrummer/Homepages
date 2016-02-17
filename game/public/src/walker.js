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
	// Walker
	///////////////////////////////////////////////////////////////////
	var Walker_states = [
		{
			'name' : 'idle',
			'initial' : true,
			'events' :
			{
				'walk' : 'walking'
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
	MyGame.Walker = function( game, name, x, y, width, height, props )
	{
		Nadion.BaseSprite.call( this, game, 'walker', name, x, y, width, height, props );

		// fields
		this.fsm = new Nadion.StateMachine( Walker_states, this );
		this.time = this.game.time;
		this.idle_time = this.time.now;
		this.idlePeriod = +(props['idlePeriod'] || 1500);
		this.walkSpeed = +(props['walkSpeed'] || 50);
		this.orientation = (props['or' || 1 ]);
		this.animations.add( 'walk', [0,1,2,3], 5, true );

		// sprite fields
		this.body.bounce.y = 0.0;
		this.body.collideWorldBounds = true;
//		this.body.gravity.y = 20;
		this.body.gravity.y = 1000;
		this.body.maxVelocity.y = 1000;
		this.body.velocity.x = 0;
		this.body.immovable  = true;
	};
	MyGame.Walker.prototype = Object.create( Nadion.BaseSprite );
	Nadion.__extends( MyGame.Walker, Nadion.BaseSprite );
	MyGame.Walker.prototype.constructor = MyGame.Walker;


	// state machine event handlers:
	MyGame.Walker.prototype.idle = function()
	{
		this.frame = 0;
		// reset idle timer
		this.idle_time = this.time.now;
	};

	MyGame.Walker.prototype.walking = function()
	{
		this.body.velocity.x = this.walkSpeed;
	};

	MyGame.Walker.prototype.updateObject = function()
	{
		// collide with the tilemap layer
		var game_state = this.game.state.states[this.game.state.current];
		this.game.physics.collide( this, game_state.main_layer );
		this.animations.play( 'walk' );
		

		var state = this.fsm.getState();
		switch( state )
		{
			case 'idle':
				this.fsm.consumeEvent( 'walk' );
				break;
			case 'walking':
				if( this.time.elapsedSince( this.idle_time ) > this.idlePeriod )
				{
					this.animations.play( 'walk' );
					this.scale.x = -(this.scale.x);
					this.body.velocity.x = -this.body.velocity.x;
					this.idle_time = this.time.now;
				}

		}


	};

})();



