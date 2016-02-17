$(document).ready(function(){

	var wHeight = $(window).height();
	var ContentHeight = $('#gig_content').height();
	var mt = (wHeight - ContentHeight) * 0.5;
	$('.herorow').height(wHeight);

	$('#gig_content').css({'margin-top':mt});

	$('.gallery>img').click(function(){
		$(document).scrollTop(0);
		$('.overlay').removeClass('hidden');
		document.documentElement.style.overflow = 'hidden'; 
	    document.body.scroll = "no"; 
	    $('#hero').attr('src',$(this).attr('src'));
	    console.log($(this));
	})	

	$('.overlay').click(function(){
		$('.overlay').addClass('hidden');
		document.documentElement.style.overflow = 'scroll';  
	    document.body.scroll = "yes"; 
	})


});