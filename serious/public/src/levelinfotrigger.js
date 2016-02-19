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
		this.layertext = "Aktuelle Ebene: <b>Handlungsanleitung</b>";
		this.activated = false;
	};
	MyGame.LevelInfoTrigger.prototype.layer2 = function()
	{
		this.layertext = "Aktuelle Ebene: <b>Verstehen</b>";
		this.activated = false;

	};
	MyGame.LevelInfoTrigger.prototype.layer3 = function()
	{
		this.layertext = "Aktuelle Ebene: <b>Dekorieren</b>";
		this.activated = false;

	};
	MyGame.LevelInfoTrigger.prototype.layer4 = function()
	{
		this.layertext = "Aktuelle Ebene: <b>Veranschaulichen</b>";
		this.activated = false;

	};
	MyGame.LevelInfoTrigger.prototype.findlayer1 = function()
	{
		this.renderText( "Es steht etwas auf der Steinwand: <b> Handlungsanleitung </b> <br><br> Ebene Handlungsanleitung entdeckt!");
		this.layertext = "Aktuelle Ebene: <b> Handlungsanleitung </b>";
	};
	MyGame.LevelInfoTrigger.prototype.findlayer2 = function()
	{
		this.layertext = "Aktuelle Ebene: <b> Verstehen </b>";
		this.renderText( "Es steht etwas auf der Steinwand: <b> Verstehen </b> <br><br> Ebene Verstehen entdeckt!");
	
	};
	MyGame.LevelInfoTrigger.prototype.findlayer3 = function()
	{
		this.layertext = "Aktuelle Ebene: <b> Dekorieren </b>";
		this.renderText( "Es steht etwas auf der Steinwand: <b> Dekorieren </b> <br><br> Ebene Dekorieren entdeckt!");
	
	};
	MyGame.LevelInfoTrigger.prototype.findlayer4 = function()
	{
		this.layertext = "Aktuelle Ebene: <b> Veranschaulichen </b>";
		this.renderText( "Es steht etwas auf der Steinwand: <b> Veranschaulichen </b> <br><br> Ebene Veranschaulichen entdeckt!");
	
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
		$('#text').html(text + (' <br><br> (weiter mit - Enter -)'));
		$('#text').slideDown(500);
	}
})();	