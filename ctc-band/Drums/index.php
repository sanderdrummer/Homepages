<!DOCTYPE html>
<html>
  <head>

    <title></title>
    <meta property="og:title" content="">
    <meta property="og:description" content="">
    <meta property="og:image" content="">
    <meta name="Description" content="">
    <meta name="Author" content="Tobias Pickel">
    <meta charset="utf-8">
    <link rel="shortcut icon" href="favicon.ico">
    <link href='http://fonts.googleapis.com/css?family=Lato:100,300' rel='stylesheet' type='text/css'>
    <link href="css/style.css" rel="stylesheet">
    <link href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.1.0/animate.min.css" rel="stylesheet">
  </head>
  <style type="text/css">
  	body{
  		background-image: url(img/bg.jpg);
  		background-size: cover;
  		
  	}
  </style>
 <body>
 	<div id="loading"> LOADING ! </div>
	<div class="main">
		<div class="row" id="hero">

		</div>
		<div class="row">
			<nav>
				<ul>
					<li id="drums"><a>DRUMS</a></li>
					<li id="snare"><a>SNARES</a></li>
					<li id="cymbals"><a>CYMBALS</a></li>
					<li id="hardware"><a>HARDWARE</a></li>
				
				</ul>
			</nav>
		</div>

		<div class="row" id="row1"></div>		
		<div class="row" id="row2"></div>
		<div class="row" id="row3"></div>
		


	</div>
	<footer>
		<div class="row">
			<div class="col-l">
				<h3>Design</h3>
				<a style="
    color: #f9f9f9;
" href="http://tp-itservice.com">Webdesign Ulm</a>

			</div>
			<div class="col-s">
			<h3>Impressum</h3>
			<p>
Tobias Pickel <br>
<br>
Virchowstraße 16<br>
<br>
89075 Ulm<br>
<br>
info@tp-itservice.com</p>

			</div>
		</div>
	</footer>
	<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script type="text/javascript">
		$( "#loading" ).hide();
		$( document ).ajaxStart(function() {
  			$( "#hero" ).removeClass('bounceInDown animated');
  			$( "#row1>.col-l" ).removeClass('bounceInLeft animated');
  			$( "#row1>.col-s" ).removeClass('bounceInRight animated');  			
  			$( "#row2>.col-s" ).removeClass('bounceInLeft animated');
  			$( "#row2>.col-l" ).removeClass('bounceInRight animated');
  			$( "#row3>.col-s" ).removeClass('bounceInRight animated');
  			$( "#row3>.col-l" ).removeClass('bounceInLeft animated');
		});

		$( document ).ajaxComplete(function() {
 			$( "#hero" ).addClass('bounceInDown animated');
 			$( "#row1>.col-l" ).addClass('bounceInLeft animated');
 			$( "#row1>.col-s" ).addClass('bounceInRight animated'); 			
 			$( "#row2>.col-s" ).addClass('bounceInLeft animated');
 			$( "#row2>.col-l" ).addClass('bounceInRight animated');
 			$( "#row3>.col-s" ).addClass('bounceInRight animated');
 			$( "#row3>.col-l" ).addClass('bounceInLeft animated');
		});

		$('#snare').click(function(){
			$.get( "snarehero.html", function( data ) {
			   $( "#hero" ).html( data );
			}); 			
			$.get( "snare1.html", function( data ) {
			   $( "#row1" ).html( data );
			}); 			
			$.get( "snare2.html", function( data ) {
			   $( "#row2" ).html( data );
			});  			
			$.get( "empty.html", function( data ) {
			   $( "#row3" ).html( data );
			}); 
		});		
		$('#cymbals').click(function(){
			$.get( "cymhero.html", function( data ) {
			   $( "#hero" ).html( data );
			}); 			
			$.get( "cym1.html", function( data ) {
			   $( "#row1" ).html( data );
			}); 			
			$.get( "cym2.html", function( data ) {
			   $( "#row2" ).html( data );
			});  			
			$.get( "empty.html", function( data ) {
			   $( "#row3" ).html( data );
			}); 
		});		
		
		$('#hardware').click(function(){
			$.get( "hwhero.html", function( data ) {
			   $( "#hero" ).html( data );
			}); 			
			$.get( "cobras.html", function( data ) {
			   $( "#row1" ).html( data );
			}); 			
			$.get( "pearl.html", function( data ) {
			   $( "#row2" ).html( data );
			}); 			
			$.get( "felle.html", function( data ) {
			   $( "#row3" ).html( data );
			}); 
		});

		$('#drums').click(function(){
			$.get( "drumhero.html", function( data ) {
			   $( "#hero" ).html( data );
			}); 
			$.get( "drum1.html", function( data ) {
			   $( "#row1" ).html( data );
			}); 
			$.get( "drum2.html", function( data ) {
			   $( "#row2" ).html( data );
			});  
			$.get( "drum3.html", function( data ) {
			   $( "#row3" ).html( data );
			}); 
		});
		$('#sound').click(function(){
			$.get( "drumhero.html", function( data ) {
			   $( "#hero" ).html( data );
			}); 
			$.get( "empty.html", function( data ) {
			   $( "#row1" ).html( data );
			}); 
			$.get( "empty.html", function( data ) {
			   $( "#row2" ).html( data );
			});  
			$.get( "empty.html", function( data ) {
			   $( "#row3" ).html( data );
			}); 
		});

		$.get( "drumhero.html", function( data ) {
		   $( "#hero" ).html( data );
		}); 			
		$.get( "drum1.html", function( data ) {
		   $( "#row1" ).html( data );
		}); 
		$.get( "drum2.html", function( data ) {
		   $( "#row2" ).html( data );
		});  
		$.get( "drum3.html", function( data ) {
		   $( "#row3" ).html( data );
		}); 

		

  		

	</script>
</body>
</html>