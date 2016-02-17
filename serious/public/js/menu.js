
var menu_state = {
	create: function (){
		var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		space_key.onDown.add(this.start, this);
		var fontStyle = {font: "30px Arial", fill:"#affeee"};
		var text = this.game.add.text(game.world.width/2, (game.world.height/2)+100,"Press spacebar to start", fontStyle);
		text.anchor.setTo(0.5,0.5);
	},

	start: function (){
		this.game.state.start('play');
	}

}