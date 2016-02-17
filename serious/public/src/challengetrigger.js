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