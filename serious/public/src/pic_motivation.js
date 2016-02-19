(function()
{
	"use strict";

	var motivationStates = [];

	MyGame.PicM = function (game,name,x,y,width,height,props)
	{
		Nadion.BaseSprite.call( this, game, 'picM', name, x, y, width, height, props );
		

	}
	MyGame.PicM.prototype = Object.create( Nadion.BaseSprite );
	Nadion.__extends( MyGame.PicM, Nadion.BaseSprite );
	MyGame.PicM.prototype.constructor = MyGame.PicM;

	MyGame.PicM.prototype.reset = function()
	{
		this.fsm.reset();
	};
	MyGame.PicM.prototype.updateObject = function()
	{
		
		var game_state = this.game.state.states[this.game.state.current];

		
		this.body.velocity.x = 0;

		
	};

})()