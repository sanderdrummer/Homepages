<!DOCTYPE html>
<html>
  <head>

    <title>Cheerful to Cloudy &middot; Gigs</title>
    <meta property="og:title" content="Cheerful to Cloudy &middot; Gigs">
    <meta property="og:description" content="Komm vorbei und hör zu, die nächsten Gigs von Cheerful to Cloudy der Newcomerband aus Ulm">
    <meta property="og:image" content="http://ctc-band.com/Logos/ctc-black.jpg">
    <meta name="Description" content="Komm vorbei und hör zu, die nächsten Gigs von Cheerful to Cloudy der Newcomerband aus Ulm">
    <meta name="Author" content="Tobias Pickel">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <link href='http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,300' rel='stylesheet' type='text/css'>
    <link rel="canonical" href="http://www.ctc-band.com/gigs.php" />
    <link rel="shortcut icon" href="favicon.ico">
    <link href="css/style.css" rel="stylesheet">
  </head>
 <body>
	<?php include 'header.php'; ?>

 	<section class="hero-gigs">
		<section id="not100" class="gigs">
			<section class="content row">
				<div itemscope itemtype="http://schema.org/Event" class="col">
					<a href="">
						<h1><span itemprop="name">
							Heimspiel </span> - Club Schilli Ulm</h1>
						<h2>am <span itemprop="startDate" content="2015-02-07T19:00">07.02.2015</span></h2>
					</a>
				</div>
				<hr>
				<p>
					Mehr Informationen zu unseren Konzerten findet ihr auch auf unserer <a href="https://www.facebook.com/cheerfultocloudy/events">Facebookpage</a> und den Veranstaltungsseiten.
				</p>
			</section>
		</section>
 	</section>
	

<?php include 'footer.php'; ?>
	<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script type="text/javascript">
		$('#navigation>li').removeClass('active');
		$('#nav_gigs').addClass('active');
				$('.navicon').click(function(){
			if ($('nav').hasClass('activated')){
				$('nav').removeClass('activated');
				$('nav').css({'display':'none'});
			}else{
				$('nav').css({'display':'block'});
				$('nav').addClass('activated');
			}
		});

	</script>



</body>
</html>