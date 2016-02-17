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

	var IntroTrigger_states = [
		{
			'name':'inactive',
			'initial':true,
			'events' :
			{
				'intro':'introtext',
				'runtut':'runtext',
				'jumptut':'jumptext',
				'climbtut':'climbtext',
				'pickuptut':'pickuptext',
				'gatetut':'gatetext',
				'picturetut':'picturetext',
				'jumphightut':'jumphightext',
				'maptut':'maptext',
				'level2tut':'level2text',
				'level2tut2':'level2text2',
				'level3tut':'level3text',
				'monster':'monstertext'
			}
		},
		{
			'name': 'introtext',
			'events' :
			{

			}
		},
		{
			'name': 'jumptext',
			'events':
			{

			}
		},
		{
			'name': 'runtext',
			'events':
			{

			}
		},
		{
			'name': 'climbtext',
			'events':
			{

			}
		},
		{
			'name': 'picturetext',
			'events':
			{

			}
		},
		{
			'name': 'pickuptext',
			'events':
			{
				'pickupOn': 'pickuptext2'
			}
		},
		{
			'name': 'gatetext',
			'events':
			{
				
			}
		},
		{
			'name': 'monstertext',
			'events':
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
			'name': 'level2text',
			'events':
			{
				
			}
		},
		{
			'name': 'level2text2',
			'events':
			{
				
			}
		},
		{
			'name': 'level3text',
			'events':
			{
				
			}
		},
		{
			'name': 'jumphightext',
			'events':
			{
				
			}
		}


	];

	MyGame.IntroTrigger = function(game, name, x, y, width, height, props)
	{
		Nadion.Trigger.call( this, game, name, x, y, width, height, props );
		this.fsm = new Nadion.StateMachine( IntroTrigger_states, this );
		props = props['on'];
		this.trigger_on_touch = true;
		this.text="";
		
	};

	MyGame.IntroTrigger.prototype = Object.create( Nadion.Trigger );
	Nadion.__extends( MyGame.IntroTrigger, Nadion.Trigger );
	MyGame.IntroTrigger.prototype.constructor = MyGame.IntroTrigger;


	MyGame.IntroTrigger.prototype.on = function()
	{
		this.fsm.consumeEvent(this.props['on']);
	};

	MyGame.IntroTrigger.prototype.introtext = function()
	{	
		
		MyGame.counter = 0;
		//$('#hud>p').hide();
		//Was für eine Landung... von dem Flugzeug ist nicht mehr viel übrig... ich muss hier irgendwie wegkommen <br> hoffentlich kann ich noch laufen...  <br> (
		$('#text').html('Bewege die Spielfigur in dem du die - Pfeiltasten - nach links oder rechts gedrückt hältst <br><br> <span class="button"> < </span> oder <span id="right-b" class="button pulse animated"> > </span> <br><br> (weiter mit <span class="button"> Enter </span>)');
		$('#text').slideDown(500);
		$(document).bind('keydown', function(e) {
		    if (e.keyCode === 13) 
		    {
		       	$('#text').slideUp(500);	 
		    	$(document).unbind( 'keydown' );
		    }
		    return true;
		});
	};

	MyGame.IntroTrigger.prototype.jumptext = function()
	{
		//Ok zusammenreißen... ein kleiner Sprung und ich bin da oben! <br> (
		$('#text').html('drücke - ALT GR - um zu springen<br><br> <span class="button "> Alt Gr </span> <br><br> (weiter mit <span class="button"> Enter </span>)');
		$('#text').slideDown(500);
		$(document).bind('keydown', function(e) {
		    if (e.keyCode === 13) 
		    {
		        //Space
		        $('#text').slideUp(500);		        
		     	$(document).unbind( 'keydown' );
		    }
		    return true;
		});
	};

	MyGame.IntroTrigger.prototype.runtext = function(){
		//Jetzt nichts wie weg hier bevor das Flugzeug in die Luft geht! <br> (
		$('#text').html('halte - Leertaste - gedrückt während du läufst um zu rennen! <br><br> <span class="button space"> Leertaste </span><br><br> (weiter mit <span class="button"> Enter </span>)' );
		$('#text').slideDown(500);
		$(document).bind('keydown', function(e) {
		    if (e.keyCode === 13) 
		    {
		        //c
		        $('#text').slideUp(500);		        
		   		$(document).unbind( 'keydown' );
		    }
		    return true;
		});
	};

	MyGame.IntroTrigger.prototype.jumphightext = function(){
		//Jetzt nichts wie weg hier bevor das Flugzeug in die Luft geht! <br> (
		$('#text').html('um große Hindernisse zu überwinden springe hoch und weit in dem du springst während du rennst <br><br> <span class="button space"> Space </span> + <span class="button"> > </span> + <span class="button"> Alt Gr </span> <br><br> (weiter mit <span class="button"> Enter </span>)');
		$('#text').slideDown(500);
		$(document).bind('keydown', function(e) {
		    if (e.keyCode === 13) 
		    {
		        //c
		        $('#text').slideUp(500);		        
		   		$(document).unbind( 'keydown' );
		    }
		    return true;
		});
	};

	MyGame.IntroTrigger.prototype.climbtext = function(){
		$('#text').html('Springe gegen eine Wand und halte die - Pfeiltaste > - gedrückt um dich festzuhalten. <br> Während du dich fest hältst kannst du auf die andre Seite springen in dem du die gegenüber liegende - < Pfeiltaste - drückst <br> <br><span class="button"> Alt Gr </span> dann <span class="button"> > </span> dann <span class="button"> < </span>  <br><br> (weiter mit -Enter- )');
		$('#text').slideDown(500);
		$(document).bind('keydown', function(e) {
		    if (e.keyCode === 13) 
		    {
		        //up
		        $('#text').slideUp(500);		        
		    	$(document).unbind( 'keydown' );
		    }
		    return true;
		});
	};

	MyGame.IntroTrigger.prototype.pickuptext = function(){
		var fsm = this.fsm;
		var game_state = this.game.state.states[this.game.state.current];
		//game_state.triggers[7].activated = false;
		game_state.player.fsm.consumeEvent('stop');
		game_state.player.fsm.consumeEvent('startstop');
		var text = '';
		text += 'hebe ein Bild auf in dem du darüber läufst , drücke - b - um es dir später nochmal anzusehen! <br>  <span class="button"> B </span> <br><br> (weiter mit -Enter- ) ';

		$('#text').html(text);
		$('#text').slideDown(500);
		$(document).bind('keydown', function(e) {
		    if (e.keyCode === 13) 
		    {
				$('#text').slideUp(500);	        
		    	$(document).unbind( 'keydown' );
		    	game_state.player.fsm.consumeEvent('end');
		    }		        		    
		});		
	};
	MyGame.IntroTrigger.prototype.gatetext = function(){
		var game_state = this.game.state.states[this.game.state.current];

		if(game_state.player.backpack === undefined)
		{
			game_state.player.fsm.consumeEvent('stop');
			game_state.player.fsm.consumeEvent('startstop');
				$('#text').html('Ein Tor versperrt den Weg <br> es steht <b>Verstehen</b> darauf <br> finde den passenden Schlüssel um es zu öffnen<br> (weiter mit <span class="button"> Enter </span>)');
				$('#text').slideDown(500);
				

			$(document).bind('keydown', function(e) {
			    if (e.keyCode === 13) 
			    {
					$('#text').slideUp(500);	        
			    	$(document).unbind( 'keydown' );
			    	game_state.player.fsm.consumeEvent('end');
			    }		        		    
			});		
		}
	};

	MyGame.IntroTrigger.prototype.monstertext = function(){
		var text = "Es liegt etwas auf dem Boden...ein Stück Papier..<br><br>"
		text+= "Forschungsexpedition Phoenix Logbuch Tag 42 <br>"
		text+= "Kein Ausweg in Sicht wir irren seit Tagen durch diesen Urwald und finden keinen Weg nach draußen ... <br>"
		text+= "Dieser Dschungel ist wie verhext ... unsere Vorräte werden nicht mehr lange halten... <br>"
		text+= "Der Stoßtrupp auf der Suche nach Hilfe hat sich seit Tagen nicht gemeldet <br>"
		text+= "Wir werden aber weiter warten<br>"
		text+= "<br><br>(weiter mit - Enter -)"
		this.renderText(text);	
	};

	MyGame.IntroTrigger.prototype.maptext = function(){
		var text;
		 
		this.renderText(text);	
	};
	MyGame.IntroTrigger.prototype.level2text = function(){
		var text = "<br>";
		text += "Stoßtrupp Phoenix Tag 43.<br>"
		text += "Wir haben den gesamten Bereich gründlich untersucht.<br>"
		text += "Wir arbeiten an der Übersetzung der vier Steinruinen mit ihren seltsamen Runenschriften.<br>"
		text += "Die Bewohner dieses Dschungels sind uns keine große Hilfe ganz im Gegenteil... wir kommen ihnen besser nicht zu nahe.<br>"
		text += "Sie verehren die Gesetze der Bilder an ihren Tempeln.<br>"
		text += "Wir haben auf jeder Ebene des Dschungels eine Tempelruine gefunden.<br>"
		text += "Wenn die Übersetzungen stimmen besagt ihre Lehre, dass jede Ebene ihres Dschungels für ein Gesetz steht. . .  <br>"
		text += "Nur wie soll uns das weiter helfen..."
		text += "<br><br> (weiter mit <span class='button'> Enter </span>)"
		this.renderText(text);	
	};	
	MyGame.IntroTrigger.prototype.level3text = function(){
		var text = "";
		text += "Stoßtrupp Phoenix Tag 45.<br>"
		text += "Wir haben ein seltsames Amulett entdeckt. Es schimmert ein Bild hindurch wenn man es ansieht.<br>"
		text += "Die Eingeborenen scheinen diese Amulette als Wegweiser zu benutzen und <br>"
		text += "es scheint irgendeine Verbindung zwischen den  vier Ebenen des Dschungels und dem Amulett zu geben aber wir kommen nicht hinter das Geheimnis.<br>"
		text += "Als wir versuchten das Amulett zum Forschungstrupp zu bringen kehrte es nach kurzer Zeit wie durch Hexerei an seinen Ausgangspunkt zurück.<br>"
		text += "Wir können uns das alles nicht erklären und werden uns erst einmal mit dem Forschungstrupp beraten."
		text += "<br><br> (weiter mit <span class='button'> Enter </span>)"
		this.renderText(text);	
	};

	MyGame.IntroTrigger.prototype.picturetext = function(){
		var game_state = this.game.state.states[this.game.state.current];
		var playerStates = game_state.player.fsm;
		playerStates.consumeEvent('startchallenge');
	};

	MyGame.IntroTrigger.prototype.renderText = function(text){
		var game_state = this.game.state.states[this.game.state.current];
		game_state.player.fsm.consumeEvent('stop');
		game_state.player.fsm.consumeEvent('startstop');
		$('#text').html(text);
		$('#text').slideDown(500);
	}
})();	