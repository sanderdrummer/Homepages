$( document ).ready(function() {
   
      $(".backtomenu").click(function(){
           $('body,html').animate({scrollTop: $("#menu").offset().top});
        });
      $(".btt").click(function(){
           $('body,html').animate({scrollTop: $(".bandmembers").offset().top});
        });
      $(".Marisa").click(function(){
           $('body,html').animate({scrollTop: $("#Marisa").offset().top});
        });
      $(".Willi").click(function(){
           $('body,html').animate({scrollTop: $("#Willi").offset().top});
        });
      $(".Rob").click(function(){
           $('body,html').animate({scrollTop: $("#Rob").offset().top});
        });
      $(".Tobi").click(function(){
          $('body,html').animate({scrollTop: $("#Tobi").offset().top});
        });

      $("#tobiimg").mouseenter(function(){
        var path = "img/tobi2.jpg";
        $('#tobiimg').attr("src",path);
      }); 
      $("#tobiimg").mouseleave(function(){
        var path = "img/tobi.jpg";
        $('#tobiimg').attr("src",path);

      });     
      $("#robimg").mouseenter(function(){
        var path = "img/rob2.jpg";
        $('#robimg').attr("src",path);
      }); 
      $("#robimg").mouseleave(function(){
        var path = "img/rob.jpg";
        $('#robimg').attr("src",path);
      });    

      $("#williimg").mouseenter(function(){
        var path = "img/willi2.jpg";
        $('#williimg').attr("src",path);
      }); 
      $("#williimg").mouseleave(function(){
        var path = "img/willi.jpg";
        $('#williimg').attr("src",path);
      });

      $("#mariimg").mouseenter(function(){
        var path = "img/mari2.jpg";
        $('#mariimg').attr("src",path);
      }); 
      $("#mariimg").mouseleave(function(){
        var path = "img/mari.jpg";
        $('#mariimg').attr("src",path);
      });

});