(function()
{
	"use strict";

	MyGame.Challenge = function (game,name,x,y,width,height,props)
	{
		Nadion.BaseSprite.call( this, game, 'challenge', name, x, y, width, height, props );
		this.challengetype = props['type'];
		this.body.width = 64;
		this.body.height = 256;
		

	}
	MyGame.Challenge.prototype = Object.create( Nadion.BaseSprite );
	Nadion.__extends( MyGame.Challenge, Nadion.BaseSprite );
	MyGame.Challenge.prototype.constructor = MyGame.Challenge;

	MyGame.Challenge.prototype.updateObject = function()
	{
		var game_state = this.game.state.states[this.game.state.current];
		this.game.physics.collide( this, game_state.main_layer );
		this.body.immovable  = true;
		this.body.collideWorldBounds = true;
		
		
	};

})()