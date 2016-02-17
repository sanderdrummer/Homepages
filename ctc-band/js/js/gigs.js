$(document).ready(function(){


	var wHeight = $(window).height();
	var ContentHeight = $('#gig_content').height();
	var mt = (wHeight - ContentHeight) * 0.5;
	$('.herorow').height(wHeight);

	$('#gig_content').css({'margin-top':mt});




});