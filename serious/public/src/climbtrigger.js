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