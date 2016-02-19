<html>
	<head>
		<title>Serious Games Uni Ulm</title>
		<meta charset="utf-8">
		<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' rel='stylesheet' type='text/css'>
		<style>
			body{
				margin: 0;
				padding: 0;
				background-color:#000;
				font-family: 'Open Sans Condensed', sans-serif;
				font-weight: 300;
				color:#111a11;
			}
			fieldset{
				border:none;
			}
			hr{
				border-color: #faf1e0;
			}
			#text{
				font-size: 2em;
				color:#111a11;
				position: absolute;
				top: 80px;
				width: 1120px;
				background-color: rgba(182,202,182,0.8);
				padding: 40px;
			}
			#hud{
				position: absolute;
				width: 1200px;
				background-color: rgba(68,83,68,0.3);
				height: 80px;
				color:#bdc5bc;
				font-size: 40px;
				margin-left: 10px;
			}
			#hud>p{
				display: inline-block;
				margin:10px;
			}
			#hud>#counter{
				
			}
			#hud>#info{
				margin-left: 300px;
			}
			#hud>#live{
				float:right; 
				display: none;
				
			}
			#hud>img{
				position: absolute;
				top: 0;
				margin-left: 1100px;
			}
		
			#submit{
				background-color: #faf1e0;
				border-width: 0px;
				border-radius: 0;
				border-bottom: solid 3px #ccc5b8;
				padding: 10px 16px;
				font-size: 23px;
				line-height: 1.33;
				display: inline-block;
				margin-bottom: 0;
				font-weight: normal;
				text-align: center;
				vertical-align: middle;
				cursor: pointer;
				background-image: none;
				white-space: nowrap;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: no;
				float:left;
			}
			.selectbox{
				background-color: #faf1e0;
				margin:32px 0;
				border-radius: 0px;
				border-width: 0px;
				display: block;
				width: 49%;
				height: 39px;
				padding: 6px 12px;
				font-size: 18px;
				line-height: 1.42857143;
				float:left;
			}
			.selectlabel{
				float:left;
				width: 49%;
			}
			.selectcontainer:after{
				content: ".";
				display: block;
				clear: both;
				visibility: hidden;
				line-height: 0;
				height: 0;
			}
			.selectcontainer{
				width:100%;
				display: inline-block;
			}
			#counter{color:#d44747;}
			.button{
				border-radius: 8px;
				border: solid 1px #111a11;
				padding: 0 25px;

			}
			.space{
				padding: 0 70px;
			}
		</style>
		
		{{ HTML::script("lib/phaser.min.js"); }}
		{{ HTML::script("lib/nadion.min.js"); }}
		{{ HTML::script("lib/jquery.min.js"); }}

	</head>
	<body>
		
		<div id="text"></div>
		<div id="backpack"></div>
		<div id="hud"><p id="counter"></p><p id="info"></p><img src=""><p id="live">Energie: 10</p></div>
<!-- 		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script> -->
		{{ HTML::script("src/mygame.js"); }}
		{{ HTML::script("src/init-n.js"); }}
		{{ HTML::script("src/player-n.js"); }}
		{{ HTML::script("src/enemy.js"); }}
		{{ HTML::script("src/obstacle.js"); }}
		{{ HTML::script("src/fire.js"); }}
		{{ HTML::script("src/pickup.js"); }}
		{{ HTML::script("src/shaman-np.js"); }}
		{{ HTML::script("src/walker.js"); }}
		{{ HTML::script("src/challenge.js"); }}
		{{ HTML::script("src/questiontrigger.js"); }}
		{{ HTML::script("src/introtrigger-pn.js"); }}
		{{ HTML::script("src/learningtrigger.js"); }}
		{{ HTML::script("src/levelinfotrigger.js"); }}
		{{ HTML::script("src/climbtrigger.js"); }}
		{{ HTML::script("src/endtrigger.js"); }}
		{{ HTML::script("src/datatrigger.js"); }}
		<!-- add game levels here -->
		{{ HTML::script("src/level-1.js"); }}
		{{ HTML::script("src/level-2.js"); }}
		{{ HTML::script("src/level-3.js"); }}
		{{ HTML::script("src/level-4.js"); }}
		{{ HTML::script("src/level-5.js"); }}
		{{ HTML::script("src/level-6.js"); }}
		{{ HTML::script("src/level-7.js"); }}
		{{ HTML::script("src/level-8.js"); }}
		{{ HTML::script("src/level-9.js"); }}
		{{ HTML::script("src/level-10.js"); }}
		{{ HTML::script("src/level-11.js"); }}
		{{ HTML::script("src/level-12.js"); }}
		{{ HTML::script("src/level-13.js"); }}
		{{ HTML::script("src/level-14.js"); }}
		{{ HTML::script("src/level-15.js"); }}
		<!-- end game levels -->
		{{ HTML::script("src/main.js"); }}
		<script type="text/javascript">
			$(document).ready(function(){
				$('#text').hide();
				$('#hud').hide();
				$('#backpack').hide();
				var ml = $( window ).width();
				ml = ((ml-1200)*0.5);
				$('#hud').css({"margin-left":ml})
				$('#text').css({"margin-left":ml})
				$('#backpack').css({"margin-right":ml})
			});
		</script>
		<img src="assets/img/verstehen_1.png" style="display:none">
		<img src="assets/img/map.png" style="display:none">
		<fieldset style="display:none" id="playerdata">
			<input type="text" name="taskTimes" value="">
			<input type="text" name="mistakes" value="">
			<input type="text" name="hits" value="">
			<input type="text" name="info" value="">
			<input type="text" name="player" value="{{$newplayer->id}}">
		</fieldset>
		<p style="display:none" id="url">{{ URL::to('/player') }}</p>
	</body>
</html>


