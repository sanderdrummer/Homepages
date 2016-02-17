//
// Copyright 2013 Joshua C. Shepard
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
"use strict";

(function()
{
	MyGame.Level_3 = function ()
	{
		// call the super-class constructor
		Nadion.Level.call( this );
		MyGame.levelinfo = 'Level-3';
		MyGame.timeout = 1000;


		this.tile_width = 32;
		this.tile_height = 32;

		// tilemap
		this.tilemap = 'assets/maps/level3-map.json';

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
				url: 'assets/img/tiger2.png',
				width: 75,
				height:50 
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
		{
			name: 'main-music-loop',
			url: 'assets/snd/bg2',
			volume: 0.8
		},
		{
			name: 'step',
			url: 'assets/snd/step',
			volume: 0.1
		},
		{
			name: 'slide',
			url: 'assets/snd/slide',
			volume: 0.1
		},
		{
			name: 'jump',
			url: 'assets/snd/jump',
			volume: 0.1
		}
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
	MyGame.Level_3.prototype = Object.create( Nadion.Level );
	Nadion.__extends( MyGame.Level_3, Nadion.Level );
	MyGame.Level_3.prototype.constructor = MyGame.Level_3;

	

})();

