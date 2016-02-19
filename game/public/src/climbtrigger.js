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
(function(){
	"use strict"


	MyGame.ClimbTrigger = function(game, name, x, y, width, height, props)
	{
		Nadion.Trigger.call( this, game, name, x, y, width, height, props );
		
		props['on'] = 'on';
		
		if( props['trigger_on_touch'] === undefined )
			this.trigger_on_touch = true;

	};

	MyGame.ClimbTrigger.prototype = Object.create( Nadion.Trigger );
	Nadion.__extends( MyGame.ClimbTrigger, Nadion.Trigger );
	MyGame.ClimbTrigger.prototype.constructor = MyGame.ClimbTrigger;




	MyGame.ClimbTrigger.prototype.on = function()
	{	
		var counter = MyGame.counter
		var game_state = this.game.state.states[this.game.state.current];
		var playerstates = game_state.player.fsm;
		if(playerstates.getState() === 'idle')
			playerstates.consumeEvent('startclimbing');
		this.activated = false;
		
			
		
	};
	MyGame.ClimbTrigger.prototype.startclimbing = function()
	{

	};
	MyGame.ClimbTrigger.prototype.endclimbing = function()
	{

	};




})();	