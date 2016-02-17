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

	MyGame.Challenge = function (game,name,x,y,width,height,props)
	{
		Nadion.BaseSprite.call( this, game, 'challenge', name, x, y, width, height, props );
		this.challengetype = props['type'];
		this.body.width = 64;
		this.body.height = 256;
		

	}
	MyGame.Challenge.prototype = Object.create( Nadion.BaseSprite );
	Nadion.__extends( MyGame.Challenge, Nadion.BaseSprite );
	MyGame.Challenge.prototype.constructor = MyGame.Challenge;

	MyGame.Challenge.prototype.updateObject = function()
	{
		var game_state = this.game.state.states[this.game.state.current];
		this.game.physics.collide( this, game_state.main_layer );
		this.body.immovable  = true;
		this.body.collideWorldBounds = true;
		
		
	};

})()