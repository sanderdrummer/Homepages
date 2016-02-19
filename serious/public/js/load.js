var load_state = {
	preload: function() {
		game.load.tilemap('map', 'img/map.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('tiles', 'img/tiles.png');
		game.load.spritesheet('player', 'img/player.png',32,64);
		//player id ,image, width, height
	},
	create: function(){
		this.game.state.start('menu');
	}
}