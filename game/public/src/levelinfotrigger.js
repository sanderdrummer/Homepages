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

	var LevelInfoTriggerStates = [
		{
			'name':'inactive',
			'initial':true,
			'events' :
			{
				'layer1':'layer1',
				'findlayer1':'findlayer1',
				'layer2':'layer2',
				'findlayer2':'findlayer2',
				'layer3':'layer3',
				'findlayer3':'findlayer3',
				'layer4':'layer4',
				'findlayer4':'findlayer4',
				'blank':'blank'
			}
		},
		{
			'name': 'layer1',
			'events' :
			{
				'layer1':'layer1'	
			}
		},
		{
			'name': 'layer2',
			'events' :
			{
				'layer2':'layer2'	
				
			}
		},
		{
			'name': 'layer3',
			'events' :
			{
				'layer3':'layer3'	
				
			}
		},
		{
			'name': 'layer4',
			'events' :
			{
				'layer4':'layer4'	
				
			}
		},
		{
			'name': 'findlayer1',
			'events':
			{
				'findlayer1':'findlayer1'	

			}
		},
		{
			'name': 'findlayer2',
			'events':
			{
				'findlayer2':'findlayer2'	

			}
		},
		{
			'name': 'findlayer3',
			'events':
			{
				'findlayer3':'findlayer3'	

			}
		},
		{
			'name': 'findlayer4',
			'events':
			{
				'findlayer4':'findlayer4'	

			}
		},
		{
			'name': 'blank',
			'events':
			{
				'blank':'blank'	

			}
		}
	];

	MyGame.LevelInfoTrigger = function(game, name, x, y, width, height, props)
	{
		Nadion.Trigger.call( this, game, name, x, y, width, height, props );
		this.layertext = "";
		this.timer;
		this.fsm = new Nadion.StateMachine( LevelInfoTriggerStates, this );
		if( props['trigger_on_touch'] === undefined )
			this.trigger_on_touch = true;


	};

	MyGame.LevelInfoTrigger.prototype = Object.create( Nadion.Trigger );
	Nadion.__extends( MyGame.LevelInfoTrigger, Nadion.Trigger );
	MyGame.LevelInfoTrigger.prototype.constructor = MyGame.LevelInfoTrigger;




	MyGame.LevelInfoTrigger.prototype.on = function()
	{	
		this.fsm.consumeEvent(this.props['on']);
		this.renderInfo();
		
	};

	MyGame.LevelInfoTrigger.prototype.layer1 = function()
	{
		this.layertext = "Aktuelle Ebene: <b>Fortsetzung</b>";
		this.activated = false;
	};
	MyGame.LevelInfoTrigger.prototype.layer2 = function()
	{
		this.layertext = "Aktuelle Ebene: <b>Prägnanz</b>";
		this.activated = false;

	};
	MyGame.LevelInfoTrigger.prototype.layer3 = function()
	{
		this.layertext = "Aktuelle Ebene: <b>Geschlossenheit</b>";
		this.activated = false;

	};
	MyGame.LevelInfoTrigger.prototype.layer4 = function()
	{
		this.layertext = "Aktuelle Ebene: <b>Ähnlichkeit</b>";
		this.activated = false;

	};
	MyGame.LevelInfoTrigger.prototype.findlayer1 = function()
	{
		this.layertext = "Aktuelle Ebene: <b> Fortsetzung </b>";
		this.renderText( "Jemand hat eine Notiz auf die Steinwand gekritzelt: <b> Ebene - Fortsetzung </b> <br> Elemente, die sich auf einer durchgehenden Linie oder Kurve befinden, werden vom visuellen System als Einheit wahrgenommen oder als zusammengehörig aufgefasst.  Darunter hängt ein weiterer Zettel. Einer der Forscher hat alle Ebenen auf eine Karte geschrieben. <br> Das könnte noch nützlich sein. <br><img src='assets/img/map.png'><br> Drücke <span class='button'> M </span> um dir die Karte nochmal anzusehen. ");
	};
	MyGame.LevelInfoTrigger.prototype.findlayer2 = function()
	{
		this.layertext = "Aktuelle Ebene: <b> Prägnanz </b>";
		this.renderText( "Wieder eine Notiz <br> <b>Ebene - Prägnanz </b> <br> Elemente, die sich von allen anderen unterscheiden, werden bevorzugt wahrgenommen.<br>");
	
	};
	MyGame.LevelInfoTrigger.prototype.findlayer3 = function()
	{
		this.layertext = "Aktuelle Ebene: <b> Geschlossenheit </b>";
		this.renderText( "Auf der Steinwand sind zahlreiche Runen eingeritzt<br> Daneben steht eine Notiz in westlicher Sprache <b> Ebene - Geschlossenheit </b> <br>Die Tendenz, in geometrischen Gebilden diejenigen Strukturen als Figur wahrzunehmen, die eher geschlossen als offen wirken.<br>");
	
	};
	MyGame.LevelInfoTrigger.prototype.findlayer4 = function()
	{
		this.layertext = "Aktuelle Ebene: <b> Ähnlichkeit </b>";
		this.renderText( "Auf der Steinwand wurde etwas geschrieben: <b>Ebene - Ähnlichkeit </b> <br>Elemente, die in Farbe, Form oder Größe ähnlich sind, werden zu einem Ganzen verbunden.<br>");
	
	};
	MyGame.LevelInfoTrigger.prototype.blank = function()
	{
		this.layertext = "Aktuelle Ebene: <b> ? </b>";
		this.activated = false;
	};
	MyGame.LevelInfoTrigger.prototype.renderInfo = function()
	{
		$('#info').html(this.layertext);

	}

	MyGame.LevelInfoTrigger.prototype.renderText = function(text){
		var game_state = this.game.state.states[this.game.state.current];
		game_state.player.fsm.consumeEvent('stop');
		game_state.player.fsm.consumeEvent('startstop');
		$('#text').html(text + (' <br><br> (weiter mit <span class="button"> Enter </span>)'));
		$('#text').slideDown(500);
	}
})();	