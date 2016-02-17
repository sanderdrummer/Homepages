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

	var LearningTrigger_states = [
		{
			'name':'inactive',
			'initial':true,
			'events' :
			{
				'door1':'door1text',
				'door2':'door2text',
				'door3':'door3text',
				'findmap':'maptext',
				'monster':'monstertext',
				'climbtut':'climbtext',
				'pickuptut':'pickuptext',
				'gatetut':'gatetext',
				'picturetut':'picturetext'
			}
		},
		{
			'name': 'door1text',
			'events' :
			{
				
			}
		},
		{
			'name': 'door2text',
			'events' :
			{
				
			}
		},
		{
			'name': 'door3text',
			'events' :
			{
				
			}
		},
		{
			'name': 'maptext',
			'events':
			{

			}
		},
		{
			'name': 'monstertext',
			'events':
			{

			}
		}
	];

	MyGame.LearningTrigger = function(game, name, x, y, width, height, props)
	{
		Nadion.Trigger.call( this, game, name, x, y, width, height, props );
		this.fsm = new Nadion.StateMachine( LearningTrigger_states, this );
		props = props['on'];
		this.trigger_on_touch = true;
		this.text="";
		
	};

	MyGame.LearningTrigger.prototype = Object.create( Nadion.Trigger );
	Nadion.__extends( MyGame.LearningTrigger, Nadion.Trigger );
	MyGame.LearningTrigger.prototype.constructor = MyGame.LearningTrigger;


	MyGame.LearningTrigger.prototype.on = function()
	{
		this.fsm.consumeEvent(this.props['on']);
	};

	MyGame.LearningTrigger.prototype.door1text = function(){
		var game_state = this.game.state.states[this.game.state.current];
		if(game_state.player.backpack === undefined)
		{
			var text = 'Ein verschlossenes Tor: <br> <b>Fortsetzung</b> <br> finde den passenden Schlüssel um es zu öffnen <br> (weiter mit -Enter-)';
			this.renderText(text);
		}	
	};

	MyGame.LearningTrigger.prototype.door2text = function(){
		var game_state = this.game.state.states[this.game.state.current];
		if(game_state.player.backpack === undefined)
		{
			var text = 'Ein verschlossenes Tor: <br> <b>Geschlossenheit</b> finde den passenden Schlüssel um es zu öffnen <br> (weiter mit -Enter-)';
			this.renderText(text);	 
		}
	};

	MyGame.LearningTrigger.prototype.door3text = function(){
		var game_state = this.game.state.states[this.game.state.current];
		if(game_state.player.backpack === undefined)
		{
			var text = 'Ein verschlossenes Tor:  <br> <b>Ähnlichkeit</b> finde den passenden Schlüssel um es zu öffnen <br> (weiter mit -Enter-)';
			this.renderText(text);	
		}	
	};	

	MyGame.LearningTrigger.prototype.maptext = function(){
		var text = 'Drücke - M - um dir die verschiedenen Ebenen und dazugehörigen Tore noch einmal anzusehen. Schließe die Übersicht mit - Enter - <br> (weiter mit  - Enter -)'; 
		this.renderText(text);
			
	};


	MyGame.LearningTrigger.prototype.renderText = function(text){
		var game_state = this.game.state.states[this.game.state.current];
		game_state.player.fsm.consumeEvent('stop');
		game_state.player.fsm.consumeEvent('startstop');
		$('#text').html(text);
		$('#text').slideDown(500);
	}



})();	