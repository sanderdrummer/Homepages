<!DOCTYPE html>
<html>
  <head>

    <title>Cheerful to Cloudy &middot; Band</title>
    <meta property="og:title" content="Cheerful to Cloudy &middot; Band">
    <meta property="og:description" content="Cheerful to Cloudy sind Marisa Willi Rob und Tobi, die Newcomerband aus Ulm">
    <meta property="og:image" content="http://ctc-band.com/Logos/ctc-black.jpg">
    <meta name="Description" content="Cheerful to Cloudy sind Marisa Willi Rob und Tobi, die Newcomerband aus Ulm">
    <meta name="Author" content="Tobias Pickel">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <link href='http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,300' rel='stylesheet' type='text/css'>
    <link rel="canonical" href="http://www.ctc-band.com/band.php" />
    <link rel="shortcut icon" href="favicon.ico">

    <link href="css/style.css" rel="stylesheet">
    <link href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.1.0/animate.min.css" rel="stylesheet">
  </head>
 <body itemscope itemtype="http://schema.org/MusicGroup">

	<?php include 'header.php'; ?>

 	<section id="hero" class="hero-band">
 		<article><h1>Warum so Cloudy ?</h1>
				<H2>Time to Cheer-up!</H2>
		</article>
 	</section>
	
	<article class="row">
		<p itemprop="description">Die starke Stimme von Sängerin Marisa, die durch raue, gleichzeitig zurückhaltende Rockklänge dringt, während sie die ersten Zeilen eines Songs anstimmt - das ist die Musik von Cheerful to Cloudy, einer Band, bei der man sich wundert, dass sie noch nicht groß aus Ulm herausgekommen ist. Glaubt uns, das wird sie noch!<br> 
		<i>- Artikel aus der SpaZz, August 2013</i>
		</p>
	</article>

	<div class="row band" id="mari">
		<section class="col-1">
			<img src="img/band/mari.png">
		</section>		
		<section class="col-2">
			<h4 itemprop="musicGroupMember">Marisa - Gesang</h4>
			
			<p>Alter: 24 </p>
			<p>Studiert: BWL </p>
			<p>Hobbys: rumsingen, mit‘m Motorrad rumfahren, rumtanzen </p>
			<p>Held der Kindheit: Sindbad der Seefahrer</p>
			<p>Erstes Konzert: Jeanette Biedermann XD </p>
			<p>Absoluter Lieblingssong: The Verve - BitterSweet Symphony</p>
		</section>				
	</div>		

	<div class="row band" id="willi">
		<section class="col-1">
			<img src="img/band/willi.png">
		</section>		
		<section class="col-2">
			<h4 itemprop="musicGroupMember">Willi - Gitarre</h4>
			
			<p>Alter: 23 </p>
			<p>Studiert: MEGAtronik </p>
			<p>Hobbys: essen und nichts tun, Probe im sitzen verbringen </p>
			<p>Held der Kindheit: Son-Goku</p>
			<p>Erstes Konzert: Taubertal Festival </p>
			<p>Absoluter Lieblingssong: Metallica - Nothing else matters </p>
		</section>				
	</div>

	<div class="row band" id="rob">
		<section class="col-1">
			<img src="img/band/rob.png">
		</section>		
		<section class="col-2">
			<h4 itemprop="musicGroupMember">Rob - Bass</h4>
			
			<p>Alter: 25 </p>
			<p>Studiert: Produktionstechnik </p>
			<p>Hobbys: Nerden, Ami-Serien und Prokrastinieren </p>
			<p>Held der Kindheit: Donatello (Turtles)</p>
			<p>Erstes Konzert: KIZ </p>
			<p>Absoluter Lieblingssong: Blur - Song 2 </p>
		</section>				
	</div>		

	<div class="row band" id="tobi">
		<section class="col-1">
			<img src="img/band/tobi.png">
		</section>		
		<section class="col-2">
			<h4 itemprop="musicGroupMember">Tobi - Drums</h4>
			
			<p>Alter: 27 </p>
			<p>Studiert: Medieninformatik </p>
			<p>Hobbys: Computerkram, Musik </p>
			<p>Held der Kindheit: Grisu der kleine Drache</p>
			<p>Erstes Konzert: Deep Purple </p>
			<p>Absoluter Lieblingssong: Extreme - Cupid's Dead</p>
		</section>				
	</div>		


	
<?php include 'footer.php'; ?>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script type="text/javascript">
	$(document).ready(function(){	
		$('#navigation>li').removeClass('active');
		$('#nav_band').addClass('active');	
	  var h = $('#hero').css("height").replace("px","");
	  h=h*0.3;
	  $('#hero>article').css({"padding-top":h+"px"})

      $("#mari").mouseenter(function(){
      	$('#mari>section>img').addClass("tada animated");
      	setTimeout(function(){
      		$('#mari>section>img').attr("src","img/band/mari2.png");
      	},50)
      }); 
      $("#mari").mouseleave(function(){
      	$('#mari>section>img').attr("src","img/band/mari.png");
  		$('#mari>section>img').removeClass("tada animated");
  	  });

      $("#willi").mouseenter(function(){
      	$('#willi>section>img').addClass("swing animated");
      	setTimeout(function(){
      		$('#willi>section>img').attr("src","img/band/willi2.png");
      	},50)
      	

      }); 
      $("#willi").mouseleave(function(){
      	$('#willi>section>img').attr("src","img/band/willi.png"); 
      	$('#willi>section>img').removeClass("swing animated")});

      $("#rob").mouseenter(function(){
      	$('#rob>section>img').addClass("swing animated");
      	setTimeout(function(){
      		$('#rob>section>img').attr("src","img/band/rob2.png");
      	},50)
      }); 

      $("#rob").mouseleave(function(){
      	$('#rob>section>img').attr("src","img/band/rob.png");
      	$('#rob>section>img').removeClass("swing animated");
      });

      $("#tobi").mouseenter(function(){
      	$('#tobi>section>img').addClass("bounce animated");
      	setTimeout(function(){
      		$('#tobi>section>img').attr("src","img/band/tobi2.png");
      	},50)
      }); 
      $("#tobi").mouseleave(function(){
      	$('#tobi>section>img').attr("src","img/band/tobi.png");
      	$('#tobi>section>img').removeClass("bounce animated");
      });

     $('.navicon').click(function(){
		if ($('nav').hasClass('activated')){
			$('nav').removeClass('activated');
			$('nav').css({'display':'none'});
		}else{
			$('nav').css({'display':'block'});
			$('nav').addClass('activated');
		}
	});
	});
</script>
</body>
</html>