$( document ).ready(function() {


       $(".backtomenu").click(function(){
           $('body,html').animate({scrollTop: $("#menu").offset().top});
        });
       
        $(".thumb").click(function(){
          $(".selectedimg").removeClass('selectedimg');
          $(this).addClass('selectedimg');
          x = (this.src).split("/").pop();
          path1 = "<img src='img/gallery/".concat(x).concat("'/>");
          $('#imagecontainer').empty().append(path1);
          $('body,html').animate({scrollTop: $("#top").offset().top});
        });

        $("#imagecontainer").click(function(){
          x = (this.childNodes[0].src);
          x = x.split("/").pop().split(".");
          x.pop();
          x = "#".concat(x);
          $('#imagecontainer').empty();
          $('body,html').animate({scrollTop: $(x).offset().top});
        });
});