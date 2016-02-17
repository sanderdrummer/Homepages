(function(){
	"use strict"

	MyGame.TestAlarm = function (game, name, x,y,width,height, props)
	{
		Nadion.Alarm.call(this,game,name,x,y,width,height, props);


	};

	MyGame.TestAlarm.prototype = Object.create( Nadion.Alarm );
	Nadion.__extends( MyGame.TestAlarm, Nadion.Alarm );
	MyGame.TestAlarm.prototype.constructor = MyGame.TestAlarm;

	

	MyGame.TestAlarm.prototype.test = function(){
		console.log('test');
	};

	
})();