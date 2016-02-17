game.TitleScreen = me.ScreenObject.extend({

	init: function(){
		this.parent(true);
		this.title = null;
		this.font = null;
		this.txtDevonshire = new me.Font("PTSans",18,"white","left");
	},


	onResetEvent: function() {	
      if(this.title == null ){
      	this.title = me.loader.getImage("title");
      }
      me.input.bindKey(me.input.KEY.ENTER, "enter", true);
	},
	
	update: function() {
		if (me.input.isKeyPressed('enter')) {
            me.state.change(me.state.PLAY);
        }
        return true;
	},

	draw: function(context){
		context.drawImage(this.title, 0, 0);
		this.txtDevonshire.draw(context,"Press Enter to start",200,250);
		this.txtDevonshire.draw(context,"x:jump, c: speed, space: shoot",0,290);
	},
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		me.input.unbindKey(me.input.KEY.ENTER);	
	}
});
