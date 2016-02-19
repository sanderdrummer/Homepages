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

	var challengeTrigger_states = [
		{
			'name':'inactive',
			'initial':true,
			'events' :
			{
				'challengeDeko':'deko',
				'challengesolve':'solve',
				'challengeUnderstand':'understand',
				'challengeMakeclear':'makeclear'
			}
		},
		{
			'name':'deko',
			'events': {}
		},
		{
			'name':'solve',
			'events': {}
		},
		{
			'name':'understand',
			'events': {}
		},
		{
			'name':'makeclear',
			'events': {}
		}

	];

	MyGame.ChallengeTrigger = function(game, name, x, y, width, height, props)
	{
		Nadion.Trigger.call( this, game, name, x, y, width, height, props );
		
		this.Challengetype = props['on'];
		this.fsm = new Nadion.StateMachine( challengeTrigger_states, this );
		if( props['trigger_on_touch'] === undefined )
			this.trigger_on_touch = true;

	};

	MyGame.ChallengeTrigger.prototype = Object.create( Nadion.Trigger );
	Nadion.__extends( MyGame.ChallengeTrigger, Nadion.Trigger );
	MyGame.ChallengeTrigger.prototype.constructor = MyGame.ChallengeTrigger;



	MyGame.ChallengeTrigger.prototype.on = function()
	{
		this.fsm.consumeEvent(this.props['on']);
	};
	MyGame.ChallengeTrigger.prototype.deko = function()
	{
		
	};
	MyGame.ChallengeTrigger.prototype.understand = function()
	{
		var game_state = this.game.state.states[this.game.state.current];
		var playerStates = game_state.player.fsm;
		playerStates.consumeEvent('startchallenge');
	};
	MyGame.ChallengeTrigger.prototype.makeclear = function()
	{
		
	};
	MyGame.ChallengeTrigger.prototype.solve = function()
	{
		
	};

	
		








})();	