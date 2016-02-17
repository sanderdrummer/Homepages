$(document).ready(function(){


	function setBandHeights(){
		var wHeight = $(window).height();
		var ContentHeight = $('#band-content').height();
		var mt = (wHeight - ContentHeight) * 0.5;
		$('.herorow').height(wHeight);

		$('#band-content').css({'margin-top':mt});
		var wHeight = $(window).height();
		$('.herorow').height(wHeight);
		
		$('#mari').mouseenter(function(){
			$('#mari').attr('src','img/band/mari2.jpg');
		});		
		$('#mari').mouseleave(function(){
			$('#mari').attr('src','img/band/mari.jpg');
		});
	}


	setBandHeights();

});