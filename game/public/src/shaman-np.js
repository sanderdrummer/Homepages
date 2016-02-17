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
				'intro':'introtext',
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
			'name': 'introtext',
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

	MyGame.Shaman.prototype.introtext = function()
	{
		var text = "Willkommen in meinem Reich. Ich bin der <i>Schamane der Bilder</i>  und dies ist mein <i>Dschungel der Bildfunktionen</i>. ";
		text+= "<i>Bilder</i> sind nicht einfach nur <i>Bilder</i> ... jedes <i>Bild</i>  hat eine <i>Funktion</i>. <br>";
		text+= "Um durch mein Reich zu gelangen finde die <i>Bilder</i>,  die hier im Dschungel versteckt sind und deute ihre <i>Funktion</i>. <br>";
		text+= "Doch Achtung!<br> Hast du ein Bild erst einmal an dich genommen bleibt dir nicht unbegrenzt Zeit.";
		text+= "Meine <i>Bilder</i>  merken wenn du dich auf falschem Weg befindest und kehren zurück an ihren Ursprungsort. <br>";
		text+= "Bist du aber schlau und schnell genug werden die <i>Bilder</i>  als Schlüssel für die Tore dienen die dir sonst den Weg versperren.  <br>";
		text+= "Mein Reich umfasst vier verschiedene Ebenen. Jede dieser Ebenen steht für eine  <i>Bildfunktion</i>. ";
		text+= "Löse meine Aufgabe ... finde die <i>Bilder</i> und wähle den richtigen Weg! <br>";
		text+= "<br><br>(weiter mit - Enter -)"
		this.talk = text;
	};
	MyGame.Shaman.prototype.learntext = function()
	{
		var text = "";
		text += "Gut gemacht ... du hast alle vier Ebenen meines Dschungels entdeckt. "
		text += "Aber glaube nicht das ich es dir weiterhin so leicht machen werde! "
		text += "Deine Prüfung hat gerade erst begonnen!"
		text += "<br><br>(weiter mit - Enter -)"
		this.talk = text;
	};

})()