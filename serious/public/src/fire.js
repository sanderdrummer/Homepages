(function()
{
	"use strict";

	var motivationStates = [];

	MyGame.Fire = function (game,name,x,y,width,height,props)
	{
		Nadion.BaseSprite.call( this, game, 'fire', name, x, y, width, height, props );
		this.Firetype = props['type'];
		this.animations.add( 'burn', [0,1,2,3], 8, true );
	}
	MyGame.Fire.prototype = Object.create( Nadion.BaseSprite );
	Nadion.__extends( MyGame.Fire, Nadion.BaseSprite );
	MyGame.Fire.prototype.constructor = MyGame.Fire;

	MyGame.Fire.prototype.updateObject = function()
	{
		var game_state = this.game.state.states[this.game.state.current];
		this.game.physics.collide( this, game_state.main_layer );
		this.body.velocity.x = 0;
		this.body.velocity.y = 0;
		this.body.gravity.y = 1000;
		this.animations.play( 'burn' );
		this.body.collideWorldBounds = true;
	};
})()