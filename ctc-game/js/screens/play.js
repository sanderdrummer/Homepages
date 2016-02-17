game.PlayScreen = me.ScreenObject.extend({
 
    onResetEvent: function() {
        // stuff to reset on state change
        // load a level
        me.levelDirector.loadLevel("welt2");
        me.audio.playTrack("bgm1");
        // add Hud Informations
        me.game.addHUD(0,0,300,300);
        me.game.HUD.addItem("live", new game.ScoreObject(0));
        me.game.HUD.updateItemValue("live", 100);
        me.game.sort();
    },
 
    /* ---
 
    action to perform when game is finished (state change)
 
    --- */
    onDestroyEvent: function() {
        me.game.disableHUD();
    }
 
});