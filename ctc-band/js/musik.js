
$(document).ready(function(){

	
	$('#navigation>li').removeClass('active');
	$('#nav_musik').addClass('active');


	var h = $('#hero').css("height").replace("px","");
	h=h*0.3;
	$('#hero>article').css({"padding-top":h+"px"})



	$('.navicon').click(function(){
		if ($('nav').hasClass('activated')){
			$('nav').removeClass('activated');
			$('nav').css({'display':'none'});
		}else{
			$('nav').css({'display':'block'});
			$('nav').addClass('activated');
		}
	});

})
