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
		$('#text').html('Bewege die Spielfigur mit den - Pfeiltasten - nach links und rechts ');
		$('#text').slideDown(500);
		$(document).bind('keydown', function(e) {
		    if (e.keyCode === 39 || e.keydown === 37) 
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
		$('#text').html('drücke - Leertaste - während du läufst um zu springen');
		$('#text').slideDown(500);
		$(document).bind('keydown', function(e) {
		    if (e.keyCode === 32) 
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
		$('#text').html('halte - c - gedrückt während du läufst um zu rennen!');
		$('#text').slideDown(500);
		$(document).bind('keydown', function(e) {
		    if (e.keyCode === 67) 
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
		$('#text').html('um große Hindernisse zu überwinden springe hoch und weit in dem du die - Leertaste - drückst während du rennst');
		$('#text').slideDown(500);
		$(document).bind('keydown', function(e) {
		    if (e.keyCode === 32) 
		    {
		        //c
		        $('#text').slideUp(500);		        
		   		$(document).unbind( 'keydown' );
		    }
		    return true;
		});
	};

	MyGame.IntroTrigger.prototype.climbtext = function(){
		//Oh Nein! Hier gehts nicht weiter ... es sei denn ich kann an dieser Pflanze nach oben klettern  <br> (
		$('#text').html('Springe gegen eine Wand und halte die Pfeiltaste gedrückt um dich festzuhalten. Während du dich fest hältst kannst du dich erneut von der Wand abstoßen um weiter nach oben zu klettern. <br> Drücke dazu zuerst die gegenüber liegende -Pfeiltaste- und dann -Leertaste- <br> (weiter mit -Enter- )');
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
		$('#text').html('Dort liegt eines der Bilder von denen der Schamane gesprochen hat, hebe es auf in dem du darüber läufst , drücke - y - um es dir später nochmal anzusehen! <br> (weiter mit -Enter- ) ' );
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
				$('#text').html('Ein Tor versperrt den Weg <br> es steht <b>Verstehen</b> darauf <br> finde den passenden Schlüssel um es zu öffnen<br> (weiter mit - Enter -)');
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
		var text = 'Diese Dschungelbewohner schauen ungemütlich aus, wenn du ihnen zu nahe kommst verlierst du Energie <br> Fällt deine Energie unter 0 musst du den Level von Vorne beginnen <br> (weiter mit  - Enter -)'; 
		this.renderText(text);	
	};

	MyGame.IntroTrigger.prototype.maptext = function(){
		var text;
		 
		this.renderText(text);	
	};
	MyGame.IntroTrigger.prototype.level2text = function(){
		var text = "";
		text += "Erkunde die vier Ebenen und finde ihre Funktion heraus!"
		text += "<br> (weiter mit - Enter -)"
		this.renderText(text);	
	};	
	MyGame.IntroTrigger.prototype.level3text = function(){
		var text = "";
		text += "Finde weitere Bilder und bringe sie zum richtigen Tor um den Weg frei zu machen"
		text += "<br> (weiter mit - Enter -)"
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