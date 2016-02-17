<!DOCTYPE html>
<html>
  <head>

    <title>Cheerful to Cloudy &middot; Kontakt</title>
    <meta property="og:title" content="Cheerful to Cloudy &middot; Kontakt">
    <meta property="og:description" content="Schreib uns doch mal">
    <meta property="og:image" content="http://ctc-band.com/Logos/ctc-black.jpg">
    <meta name="Description" content="Schreib uns doch mal">
    <meta name="Author" content="Tobias Pickel">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <link href='http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,300' rel='stylesheet' type='text/css'>
    <link rel="canonical" href="http://www.ctc-band.com/kontakt.php" />
    <link rel="shortcut icon" href="favicon.ico">

    <link href="css/style.css" rel="stylesheet">
  </head>
 <body>
	<?php include 'header.php'; ?>

 	<section class="hero-kontakt">
 		<section id="not100" class="row">
			<div class="content">
				<h1>Schreib uns doch mal</h1>
				<fieldset id="contact-form">
				 	  <input class="row" type="email" name="email" id="email" id="" placeholder="Deine Mail">
				  	  <textarea  name="message" class="row" placeholder="Deine Nachricht" rows="10"></textarea>
				  	  <button class="row" type="submit" id="submit" class="btn btn-lg btn-default form-control">Send</button>
				</fieldset>
				<h1>info@ctc-band.com</h1>
			</div>
		</section>
 	</section>
	

	
<?php include 'footer.php'; ?>

	<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script type="text/javascript">

		$('#navigation>li').removeClass('active');
		$('#nav_kontakt').addClass('active');
		$('.navicon').click(function(){
			if ($('nav').hasClass('activated')){
				$('nav').removeClass('activated');
				$('nav').css({'display':'none'});
			}else{
				$('nav').css({'display':'block'});
				$('nav').addClass('activated');
			}
		});
		$('#submit').click(function(){
			var email      = $('input[name=email]').val();
			var message    = $('textarea[name=message]').val();

			var message_entered = true;

	        if(message=="") {  
	            $('textarea[name=message]').css('border-color','red'); 
	            message_entered = false;
	        }

	        if(message_entered){
	        	post_data = {'email':email, 'message':message};
	        }

            $.post('mail.php', post_data, function(response){  

                //load json data from server and output message     
				if(response.type == 'error')
				{
					output = '<div class="error">'+response.text+'</div>';
				}else{
				    output = '<div class="success">'+response.text+'</div>';
					
					//reset values in all input fields
					$('#contact_form input').val(''); 
					$('#contact_form textarea').val(''); 
				}
				
				$(".content").hide().html(output).slideDown();
            }, 'json');

		});
	</script>

</body>
</html>