(function()
{
	"use strict";

	var motivationStates = [];

	MyGame.Pickup = function (game,name,x,y,width,height,props)
	{
		Nadion.BaseSprite.call( this, game, 'pickup', name, x, y, width, height, props );
		this.picture = props['picture'];
		this.pictureType = props['pictureType'];

		this.animations.add( 'pulse', [0,1,2,3], 4, true );

	}
	MyGame.Pickup.prototype = Object.create( Nadion.BaseSprite );
	Nadion.__extends( MyGame.Pickup, Nadion.BaseSprite );
	MyGame.Pickup.prototype.constructor = MyGame.Pickup;

	MyGame.Pickup.prototype.updateObject = function()
	{
		
		var game_state = this.game.state.states[this.game.state.current];
		this.animations.play( 'pulse' );
		this.body.velocity.x = 0;
		this.body.collideWorldBounds = true;
	};

})()