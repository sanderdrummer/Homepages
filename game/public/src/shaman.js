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
(function()
{
	"use strict";

	var ShamanStates = [
		{
			'name':'inactive',
			'initial':true,
			'events' :
			{
				'intro1':'intro1text',
				'intro2':'intro2text',
				'learn':'learntext',
				'door3':'door3text',
				'findmap':'maptext',
				'monster':'monstertext',
				'climbtut':'climbtext',
				'pickuptut':'pickuptext',
				'gatetut':'gatetext',
				'picturetut':'picturetext'
			}
		},
		{
			'name': 'intro1text',
			'events' :
			{
				
			}
		},
		{
			'name': 'intro2text',
			'events' :
			{
				
			}
		},
		{
			'name': 'learntext',
			'events' :
			{
				
			}
		}
	];


	MyGame.Shaman = function (game,name,x,y,width,height,props)
	{
		Nadion.BaseSprite.call( this, game, 'shaman', name, x, y, width, height, props );
		this.fsm = new Nadion.StateMachine( ShamanStates, this );
		this.state= props['state'];
		this.talk = "";
		this.body.width = 32;
		this.body.height = 64;
	}

	MyGame.Shaman.prototype = Object.create( Nadion.BaseSprite );
	Nadion.__extends( MyGame.Shaman, Nadion.BaseSprite );
	MyGame.Shaman.prototype.constructor = MyGame.Shaman;

	MyGame.Shaman.prototype.updateObject = function()
	{
		var game_state = this.game.state.states[this.game.state.current];
		this.body.velocity.x = 0;
		this.body.collideWorldBounds = true;
	};

	MyGame.Shaman.prototype.intro1text = function()
	{
		var text = "Es liegt etwas auf dem Boden...ein Stück Papier..<br><br>"
		text+= "Forschungsexpedition Phoenix Logbuch Tag 42 <br>"
		text+= "Kein Ausweg in Sicht wir irren Seit Tagen durch diesen Urwald und finden keinen Weg nach draußen ... <br>"
		text+= "Dieser Dschungel ist wie verhext ... unsere Vorräte werden nicht mehr lange halten... <br>"
		text+= "Der Stoßtrupp auf der Suche nach Hilfe hat sich seit Tagen nicht gemeldet <br>"
		text+= "Wir werden aber weiter warten<br>"
		text+= "<br><br>(weiter mit - Enter -)"
		this.talk = text;
	};
	MyGame.Shaman.prototype.intro2text = function()
	{
		var text = "<br>"
		text+= "Forschungsexpedition Phoenix Logbuch Tag 50 <br>"
		text+= "Der Stoßtrupp ist zurück gekehrt... aber ihre Ergebnisse bringen uns nicht weiter.<br>"
		text+= "Sie haben Herausgefunden, dass sich der Dschungel in vier Ebenen aufteilt.<br>"
		text+= "Einen Ausgang haben sie trotzdem nicht gefunden...<br>"
		text+= "Wir werden nicht Aufgeben und es weiter versuchen."
		text+= "<br><br>(weiter mit - Enter -)"
		this.talk = text;
	};
	MyGame.Shaman.prototype.learntext = function()
	{
		var text = "";
		text += "Gut gemacht ... du hast alle vier Ebenen entdeckt. "
		text += "Doch sei gewarnt je weiter du kommst desto schwerer wird es dir ergehen."
		text += "Der Dschungel lässt niemanden einfach gehen. <br> Deine Prüfung hat gerade erst begonnen! <br> viel Glück du wirst es brauchen"
		text += "<br><br>(weiter mit - Enter -)"
		this.talk = text;
	};

})()