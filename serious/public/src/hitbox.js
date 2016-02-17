(function()
{
	"use strict";

	var HitBox_states = [];

	MyGame.HitBox = function(game, name, x, y, width, height, props)
	{
		Nadion.Trigger.call( this, game, name, x, y, width, height, props );
		
		props['on'] = 'on';
		this.fsm = new Nadion.StateMachine( HitBox_states, this );
		if( props['trigger_on_touch'] === undefined )
			this.trigger_on_touch = true;

	};

	MyGame.HitBox.prototype = Object.create( Nadion.Trigger );
	Nadion.__extends( MyGame.HitBox, Nadion.Trigger );
	MyGame.HitBox.prototype.constructor = MyGame.HitBox;


	MyGame.HitBox.prototype.on = function()
	{
		$('#text').html('trigger berührt');
		$('#text').show(500);
		return true;
	};

})()