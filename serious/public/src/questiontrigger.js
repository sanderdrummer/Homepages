(function(){
	"use strict"

	var QuestionTriggerStates = [];

	MyGame.QuestionTrigger = function(game, name, x, y, width, height, props)
	{
		Nadion.Trigger.call( this, game, name, x, y, width, height, props );
		
		props['on'] = 'on';
		if( props['trigger_on_touch'] === undefined )
			this.trigger_on_touch = true;

	};

	MyGame.QuestionTrigger.prototype = Object.create( Nadion.Trigger );
	Nadion.__extends( MyGame.QuestionTrigger, Nadion.Trigger );
	MyGame.QuestionTrigger.prototype.constructor = MyGame.QuestionTrigger;




	MyGame.QuestionTrigger.prototype.on = function()
	{
		var baseUrl = 'http://127.0.0.1/test_lav/test/public/'
		$.ajax({
		    type: "POST",
		    url : baseUrl+"player/midquestions",
		    data : "test",
		    success : function(data){
		        $('#text').html(data);
		        $('#text').slideDown(500);

		    }
		},"json");				        
		return true;
	};
})();	