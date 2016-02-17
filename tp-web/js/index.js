

function center(){
	var hero = $('#hero');
	var h = (hero.css("height").replace("px",""))*0.7;
	var w = (hero.css("width").replace("px",""))/2;
	hero.css({"position":"absolute","top":"50%","left":"50%","margin-left":"-"+w+"px","margin-top":"-"+h+"px"});
	
}


$( document ).ajaxStart(function() {
	$('#hero').removeClass('bounceInDown animated');
});

$( document ).ajaxComplete(function() {
	center();
	$('#hero').css({'opacity':1});
	$('#hero').addClass('bounceInDown animated');
});


$( document ).ready(function() {


	$('nav>ul>li').removeClass('active');
	$('nav>ul>li>a[href="index.php"]').parent().addClass('active');

	


	function i4(){
		setTimeout(function(){
			$.get( "carousel/index-4.html", function( data ) {
			   $( "#hero" ).html( data );
			}); 
			i2();	
		},4500);
	}
	function i3(){
		setTimeout(function(){
			$.get( "carousel/index-3.html", function( data ) {
			   $( "#hero" ).html( data );
			}); 
			i4();	
		},4500);
	}

	function i2(){
		setTimeout(function(){
			$.get( "carousel/index-2.html", function( data ) {
			   $( "#hero" ).html( data );
			}); 
			i3();	
		},4500);
	}

	function carouselStart(){
		setTimeout(function(){
			$.get( "carousel/index-1.html", function( data ) {
			   $( "#hero" ).html( data );
			}); 
			i2();			
		},1500);
	}

	carouselStart();
}); 