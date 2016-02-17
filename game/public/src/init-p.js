// init State for Nadion template
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

MyGame.Init = (function()
{
	function preload()
	{
		// load the "preload" sprit
		this.game.load.image( 'preload', 'assets/img/loading.png' );

		// load the assets we need for the splash/menu state
        this.game.load.image( 'logo', 'assets/img/start.jpg' );
        this.game.load.image( 'logo-text', 'assets/img/start-text.png' );
        
        this.game.load.image( 'plane', 'assets/img/plane.png' );
        this.game.load.image( 'cloud', 'assets/img/cloud.png' );
		this.game.load.audio( 'logo-fx', ['assets/snd/intro.mp3', 'assets/snd/intro.ogg'] );
	}

	function create()
	{	


		
		MyGame.myTimer = this.game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);


		// (WebGL doesn't have a context and can't do this)
		if( this.game.context )
			Phaser.Canvas.setSmoothingEnabled( this.game.context, false );

		// we'll redraw the entire screen every time, no need to clear
		this.game.stage.clear = false;

		// desktop settings
	    if( this.game.device.desktop )
	    {
		    this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
			// don't scale below actual size
		    this.game.stage.scale.minWidth = Nadion.VIEW_WIDTH;
		    this.game.stage.scale.minHeight = Nadion.VIEW_HEIGHT;
			// scale up to 1.5x maximum
		    this.game.stage.scale.maxWidth = Nadion.VIEW_WIDTH * 1.5;
		    this.game.stage.scale.maxHeight = Nadion.VIEW_HEIGHT * 1.5;
		    this.game.stage.scale.forceLandscape = true;
		    this.game.stage.scale.pageAlignHorizontally = true;
		    this.game.stage.scale.setScreenSize( true );
	    }




		// TODO: wait for our sound(s) to be loaded
		//while( !this.cache.isSoundDecoded( 'logo-fx' ) ) {}

		
        this.logo = this.game.add.sprite( 0, 0, 'logo' );
        

	
		







        //Start Intro Animation Sequence      
        this.logo.alpha = 0;
        this.tween = this.game.add.tween( this.logo )
        	.to ({ alpha : 1 }, 0, Phaser.Easing.Sinusoidal.In )
        	.start();
		
		this.tween.onComplete.addOnce( startplane, this );








		// play the start-screen music
		this.music = this.game.add.audio( 'logo-fx', 1, true );
		this.music.play( '', 0, 0.5 );

		this.game.stage.backgroundColor = '#333333';

		this.ready = false;
	}

	function startplane(){
		this.plane = this.game.add.sprite(800,0,'plane');	
		this.tween = this.game.add.tween( this.plane )
			.to({ x : -1000, y: 1000 }, 4000, Phaser.Easing.Sinusoidal.In )
			.start();
		this.tween.onComplete.addOnce( explode, this );

	}
	function explode(){
		this.cloud = this.game.add.sprite(10,500,'cloud');	
		this.tween = this.game.add.tween( this.cloud )
			.to({ y: 350, alpha: 0 }, 1000, Phaser.Easing.Sinusoidal.In )
			.start();
		this.tween.onComplete.addOnce( showtext, this );

	}
	function showtext(){
		this.cloud = this.game.add.sprite(0,-500,'logo-text');	
		this.tween = this.game.add.tween( this.cloud )
			.to({ y: 0,x:0, alpha: 1 }, 1000, Phaser.Easing.Sinusoidal.In )
			.start();
		this.tween.onComplete.addOnce( onReady, this );

	}
	function onReady()
	{
		
		this.ready = true;
	}

	function update()
	{
		while( !this.ready ) return;

		if( this.game.input.keyboard.isDown( Phaser.Keyboard.ENTER ) || this.game.input.keyboard.isDown( Phaser.Keyboard.SPACEBAR ) || this.game.input.pointer1.isDown )
		{
			this.game.sound.stopAll();
			this.game.state.add( 'level-1', new MyGame.Level_1, true );
			$('#hud').show();
			//$('#hud>#counter').hide();
		}
	}
	function updateCounter()
	{
		MyGame.counter = MyGame.counter +1;
		MyGame.globalcounter = MyGame.globalcounter +1;
		$('#hud>#counter').html(MyGame.counter);

	}

	// return public API for this module
	return {
		preload : preload,
		create : create,
		update : update
	};
})();


