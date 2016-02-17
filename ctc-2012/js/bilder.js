$( document ).ready(function() {
  $(".backtomenu").click(function(){
     $('body').animate({scrollTop: $("#menu").offset().top});
  });
  
  $("#bigimg").click(function(){
    x = (this.src);
    x = x.split("/");
    x = x.pop();
    x = x.split(".");
    x = parseInt(x[0])
    x=(x+1)%15
    path = "img/shooting/shooting/" + x +".jpg"
    $('#bigimg').attr("src",path) 
  });
  $(".thumb").click(function(){
    $(".selectedimg").removeClass('selectedimg')
    $(this).addClass('selectedimg')
    x = (this.src)
    x = x.split("/")
    x = x.pop()
    path = "img/shooting/shooting/"
    path = path.concat(x)
    $('#bigimg').attr("src",path)
  });
});