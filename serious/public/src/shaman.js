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
		var text = "Willkommen in meinem Reich. Ich bin der <i>Schamane der Bilder</i> und dies ist mein <i>Dschungel der Bildfunktionen</i>. ";
		text+= "<i>Bilder</i> sind nicht einfach nur <i>Bilder</i>... jedes <i>Bild</i> hat eine <i>Funktion</i>. ";
		text+= "Um durch meinen Dschungel zu gelangen finde die <i>Bilder</i>, die hier im Dschungel versteckt sind und deute ihre <i>Funktion</i>. ";
		text+= "Seid Ihr weise genug sollen euch die <i>Bilder</i> als Schlüssel für die Tore dienen die euch sonst den Weg versperren ";
		text+= "<br>Mein Reich umfasst vier verschiedene Ebenen. Jede dieser Ebenen steht für eine  <i>Bildfunktion</i>. ";
		text+= "Nur wenn ihr mit eurem Bild auf der richtigen Ebene seid könnt ihr passieren. ";
		text+= "Löst meine Aufgabe ... findet die <i>Bilder</i> und wählt den richtigen Weg! <br>";
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