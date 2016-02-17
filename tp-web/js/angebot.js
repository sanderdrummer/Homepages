
$( document ).ready(function() {


	$('nav>ul>li').removeClass('active');
	$('nav>ul>li>a[href="angebot.php"]').parent().addClass('active');

	$('#redesign-trigger').mouseenter(function(){
		
		$('#redesign>img').attr('src','img/neu.png');
	});	

	$('#redesign-trigger').mouseleave(function(){
		
		$('#redesign>img').attr('src','img/alt.png');
	});

}); 