$(document).ready(function(){


	var wHeight = $(window).height();
	var ContentHeight = $('#index-content').height();
	var mt = (wHeight - ContentHeight) * 0.4;
	$('.herorow').height(wHeight);

	$('#index-content').css({'margin-top':mt});
	$('.herorow').height(wHeight);

	var news1Top = $('#news1').offset().top * 0.6; 
	var news2Top = $('#news2').offset().top * 0.8; 

	$(window).scroll(function(){
		if ($(document).scrollTop() > news1Top){
			$('.to_left').css({'margin-left':'0px','opacity':'1'})
		}		

		if ($(document).scrollTop() > news2Top){
			$('.to_left2').css({'margin-left':'0px','opacity':'1'})
		}

			
	});

	$('#test').click(function(){
		$.get( "ajax_band.html", function( data ) {
		  $( ".wrapper" ).html( data );
		});	
	})
	


	var audioPlayer=document.getElementById("player"); 
	if (audioPlayer.canPlayType('audio/mpeg')){
		$('#start').click(function(){
			if ($('#start > span').hasClass('glyphicon-play')){
				audioPlayer.play();
				$('#start > span').removeClass('glyphicon-play').addClass('glyphicon-stop');
			}else{
				audioPlayer.pause();
				$('#start > span').removeClass('glyphicon-stop').addClass('glyphicon-play');
			}
		});

		$('#next').click(function(){
			audioPlayer.pause();
			audioPlayer.src='audio/D&B.mp3';
			audioPlayer.play();
			$('#title').html('D&B');
		});			

		$('#back').click(function(){
			audioPlayer.pause();
			audioPlayer.src='audio/touch.mp3';
			audioPlayer.play();
			$('#title').html('Touch');
		});	
	}else{
		$('.navbar-bot').addClass('hidden')	
	}

});