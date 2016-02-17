var game = new Phaser.Game(800, 600, Phaser.AUTO, '');
var score = 0;

game.state.add('load',load_state);
game.state.add('menu',menu_state);
game.state.add('play',play_state);

game.state.start('load');