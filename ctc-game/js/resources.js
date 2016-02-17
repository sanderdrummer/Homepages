game.resources = [
    /**
     * Graphics.
     */
    //Title and Screens
    {name: "gameover",  type:"image", src: "data/img/gui/gameover.png"},
    {name: "title",  type:"image", src: "data/img/gui/title.png"},

    // level tileset
    {name: "tiles",  type:"image", src: "data/img/map/tiles.png"},
    {name: "tiles2",  type:"image", src: "data/img/map/tiles2.png"},
   
    //player
    {name:"walk", type:"image", src:"data/img/sprite/walk.png"},
    {name:"shoot", type:"image", src:"data/img/sprite/shoot.png"},
    {name:"gir", type:"image", src:"data/img/sprite/gir.png"},
    
    //maps
    {name: "welt1", type: "tmx", src: "data/map/welt1.tmx"},
    {name: "welt2", type: "tmx", src: "data/map/welt2.tmx"},
    {name: "welt3", type: "tmx", src: "data/map/welt3.tmx"},
    
    // the background
    {name: "1bg",         type:"image", src: "data/img/1bg.png"},

    //collectables
    {name: "note",  type:"image", src: "data/img/sprite/note.png"},
    
    //Sounds
    {name: "bgm1",  type:"audio", src: "data/bgm/", channel: 1},
    {name: "cling", type: "audio", src: "data/sfx/", channel : 2},
    {name: "stomp", type: "audio", src: "data/sfx/", channel : 1},
    {name: "jump",  type: "audio", src: "data/sfx/", channel : 1},
    {name: "fire",  type: "audio", src: "data/sfx/", channel : 1}
];

//Configurar fontes a utilizar - Google web Fonts
WebFontConfig = {
    google: { families: [   'Lancelot::latin',
                            'PTSans::latin',
                            'Geostar::latin',
                            'MedievalSharp::latin',
                            'Devonshire::latin']}
    };
