<!DOCTYPE html>
<html>
  <head>

    <title>Cheerful to Cloudy &middot; Bilder</title>
    <meta property="og:title" content="Cheerful to Cloudy &middot; Bilder">
    <meta property="og:description" content="Bilder von und mit Cheerful to Cloudy der Newcomerband aus Ulm">
    <meta property="og:image" content="http://ctc-band.com/Logos/ctc-black.jpg">
    <meta name="Description" content="Bilder von und mit Cheerful to Cloudy der Newcomerband aus Ulm">
    <meta name="Author" content="Tobias Pickel">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <link href='http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,300' rel='stylesheet' type='text/css'>
    <link rel="canonical" href="http://www.ctc-band.com/bilder.php" />
    <link rel="shortcut icon" href="favicon.ico">
    <!-- Bootstrap -->
    <link href="css/style.css" rel="stylesheet">
  </head>
 <body itemscope itemtype="http://schema.org/MusicGroup">
	
	<section class="" id="img-hero" ><img alt="img-gallery big" src="">
		<section class="close">X <br> <small>ESC</small></section>
	</section>

	<?php include 'header.php'; ?>


	<section class="images-holder"></section>

	<section class="images">
	<h2>Recordingsession bei <a href="http://www.turbinepowered.de/index.php?option=com_content&amp;view=category&amp;layout=blog&amp;id=2&amp;Itemid=3">Turbine Powered </a></h2>
	<hr>
		<div class="col-4">
			<img class="g-img" src="img/gallery/s1.jpg">
		</div>
		
		<div class="col-4">
			<img class="g-img" src="img/gallery/s2.jpg">

		</div>
		
		<div class="col-4">
			<img class="g-img" src="img/gallery/s3.jpg">

		</div>
		
		<div class="col-4">
			<img class="g-img" src="img/gallery/s4.jpg">

		</div>

	</section>	

	<section class="images">
	<h2>Bandfotos</h2>
	<hr>
		<div class="col-4">
			<img class="g-img" src="img/gallery/0.jpg">
			<img class="g-img" src="img/gallery/13.jpg">
		</div>
		
		<div class="col-4">
			<img class="g-img" src="img/gallery/2.png">
			<img class="g-img" src="img/gallery/bod.jpg">
		</div>
		
		<div class="col-4">
			<img class="g-img" src="img/gallery/2.jpg">
			<img class="g-img" src="img/gallery/12.jpg">

		</div>
		
		<div class="col-4">
			<img class="g-img" src="img/gallery/11.jpg">
			<img class="g-img" src="img/gallery/ctc2.jpg">
			<img class="g-img" src="img/gallery/extern.jpg">
		</div>

	</section>

	<section class="images">
	<h2>Gigs</h2>
	<hr>
		<div class="col-4">
			<img class="g-img" src="img/gallery/4.jpg">
		</div>
		
		<div class="col-4">
			<img class="g-img" src="img/gallery/g4.jpg">
		</div>
		
		<div class="col-4">
			<img class="g-img" src="img/gallery/ctc1.png">
		</div>
		
		<div class="col-4">
			<img class="g-img" src="img/gallery/g3.jpg">
		
		</div>

	</section>

<?php include 'footer.php'; ?>

	<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script type="text/javascript">
	$(document).ready(function(){
				$('#navigation>li').removeClass('active');
				$('#nav_bilder').addClass('active');
				var images = $('.g-img').toArray();
				var i = 0;
				$('#img-hero>img').click(function(){
					var h = $("#img-hero>img");
		        	i += 1;
		        	if(i>15){
		        		i=0;
		        	}

		        	var imgh = $('#img-hero').css("height").replace("px","");
		        	$('#img-hero>img').css({"padding-top":(imgh*0.1) + "px", "max-height":(imgh*0.8) + "px", "max-width":"50%", "margin-left":"25%"})

		        	var src = images[i].getAttributeNode("src").value;
		        	h.attr("src", src);
				});
				$('.close').click(function(){
					$('#img-hero').css({"display":"none"})
				});


				document.onkeydown = function(evt) {
				    evt = evt || window.event;
				    if (evt.keyCode == 27) {
				       $('#img-hero').css({"display":"none"})
				    }
				};

				$('.col-4>img').click(function(){
					var imgh = $('#img-hero').css("height").replace("px","");
		        	$('#img-hero>img').css({"padding-top":(imgh*0.1) + "px", "max-height":(imgh*0.8) + "px", "max-width":"50%", "margin-left":"25%"})
					$('#img-hero>img').attr("src", $(this).attr("src"));
					$('#img-hero').css({"display":"block"})
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