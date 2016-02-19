(function()
{
	"use strict";

	var motivationStates = [];

	MyGame.Obstacle = function (game,name,x,y,width,height,props)
	{
		Nadion.BaseSprite.call( this, game, 'Obstacle', name, x, y, width, height, props );
		this.Obstacletype = props['type'];
	}
	MyGame.Obstacle.prototype = Object.create( Nadion.BaseSprite );
	Nadion.__extends( MyGame.Obstacle, Nadion.BaseSprite );
	MyGame.Obstacle.prototype.constructor = MyGame.Obstacle;

	MyGame.Obstacle.prototype.updateObject = function()
	{
		var game_state = this.game.state.states[this.game.state.current];
		this.game.physics.collide( this, game_state.main_layer );
		this.body.velocity.x = 1;
		this.body.velocity.y = 1;
		this.body.gravity.y = 1000;
		this.body.collideWorldBounds = true;
	};
})()