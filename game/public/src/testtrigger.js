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
(function(){
	"use strict"

	var testtrigger_states = [
		{
			'name':'inactive',
			'initial':true,
			'events' :
			{
				'activate':'startmenu'
			}
		},
		{
			'name': 'startmenu',
			'events' :
			{
				'choice1':'text1',
				'chocie2':'text2',
				'end':'inactive'

			}
		}

	];

	MyGame.TestTrigger = function(game, name, x, y, width, height, props)
	{
		Nadion.Trigger.call( this, game, name, x, y, width, height, props );
		
		props['on'] = 'on';
		this.fsm = new Nadion.StateMachine( testtrigger_states, this );
		if( props['trigger_on_touch'] === undefined )
			this.trigger_on_touch = true;

	};

	MyGame.TestTrigger.prototype = Object.create( Nadion.Trigger );
	Nadion.__extends( MyGame.TestTrigger, Nadion.Trigger );
	MyGame.TestTrigger.prototype.constructor = MyGame.TestTrigger;




	MyGame.TestTrigger.prototype.on = function()
	{


		$('#text').html('trigger berührt');
		$('#text').show(500);
		this.fsm.consumeEvent('activate');
		this.game.add

		return true;
	};

	MyGame.TestTrigger.prototype.startmenu = function()
	{	
		console.log(MyGame.counter);
		MyGame.counter = 0;
		
		$('#text').html('trigger loest etwas aus');
		$('#text').show(500);
		$(document).bind('keydown', function(e) {
		    if (e.keyCode == 72) {
		        //H
		        $('#text').html('ein test mit H');
		        $('#text').hide(1500);
		    } else if (e.keyCode == 74) {
		        //J
		        $('#text').html('<a href="http://127.0.0.1/test_lav/test/public/player">Du hast es Geschafft :)</a>');
		    }
		    return true;
		})

		




	};




})();	