"use strict";

(function()
{
	MyGame.Level_2 = function ()
	{
		// call the super-class constructor
		Nadion.Level.call( this );


		this.tile_width = 32;
		this.tile_height = 32;

		// tilemap
		this.tilemap = 'assets/maps/level2.json';

		// tileset
		this.tileset_url = 'assets/img/tiles.png';

		// spritesheets
		this.spritesheets = 
		[
			{
				name: 'player',
				url: 'assets/img/rossiwalk.png',
				width: 32,
				height:64 
			},				{
				name: 'fire',
				url: 'assets/img/fire.png',
				width: 32,
				height:64 
			},		
			{
				name: 'pickup',
				url: 'assets/img/pickup2.png',
				width: 32,
				height:32 	
			},		
			{
				name: 'shaman',
				url: 'assets/img/schamane.png',
				width: 32,
				height:64 	
			},		
			{
				name: 'fighter',
				url: 'assets/img/fighter.png',
				width: 32,
				height:62 	
			},		
			{
				name: 'walker',
				url: 'assets/img/tiger.png',
				width: 32,
				height:32 	
			},
			{
				name: 'challenge',
				url: 'assets/img/gate.png',
				width: 64,
				height:256 	
			}
		];
		// images
		this.images = 
		[
			{
				name: 'background',
				url: 'assets/img/bg.jpg',
				width: 1024,
				height: 512
			},
		];

		// sound fx
		// (sans extension, must exist as both mp3 & ogg 
		// extension will be added in code)
		this.sounds = 
		[
		
		];
		// background music/soundtrack
		var bg_music_idx = Nadion.findNamedItemInArray( this.sounds, 'main-music-loop' );
		if( bg_music_idx !== undefined )
			this.background_music = this.sounds[bg_music_idx];

		// background color
		this.background_color = '#333';

		// set the game_namespace, which is where the Tiled object creation
		// code will look for your object types (it will fall-back to Nadion
		// and then the global namespace)
		this.game_namespace = MyGame;


		// if you set the loading font style to a bitmap font, 
		// the percentage loaded will display along with the 'loading' png
		//this.loading_text_style = { font: "My_Bitmap_Font", align: "center" };
	};
	MyGame.Level_2.prototype = Object.create( Nadion.Level );
	Nadion.__extends( MyGame.Level_2, Nadion.Level );
	MyGame.Level_2.prototype.constructor = MyGame.Level_2;

	

})();

