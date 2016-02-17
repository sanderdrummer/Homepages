    $(document).ready(function(){
        function scrollToAnchor(aid, offset){
            var aTag = $(aid);
            if(offset === undefined){offset = 0;}
            if(aTag.offset() !== undefined){
                $('html,body').animate({scrollTop: aTag.offset().top - offset},'fast');
            }
        }
        $("img.lazy").lazyload({
            effect : "fadeIn"
        });

        $("nav").headroom({
          "offset": 200,
          "tolerance": 28,
          "classes": {
            "initial": "",
            "pinned": "slideDown",
            "unpinned": "slideUp"
          }
        });

        $('.item').each(function(number, value){
            if(value.firstChild != null)
            {
                src = value.childNodes[1].src;
                $(this).css({'background-image':'url('+src+')','background-size':'cover'});
            }
        })


        $('nav>ul>li').click(function(){
            scrollToAnchor('.'+$(this).data('to'));
        })
        $('nav>span').click(function(){
            scrollToAnchor('.hero');
        });





        
        //Portfolio HoverEffekt
        $('.item').mouseenter(function(){
            $(this).css({'background-image':'url('+$(this).children('.none').attr('src')+')','background-size':'cover'});
        });
        $('.item').mouseleave(function(){  
            if(!$(this).hasClass('active')){
                $(this).css({'background-image':'url('+$(this).children('.first').attr('src')+')','background-size':'cover'});
            }
        });
        //Portfolio Tabs
        $('.item').click(function(){
            if($(this).hasClass('active')){
                $($(this).data('to')).fadeOut();
                $($(this).data('to')).removeClass('tab_open');
                $(this).removeClass('active');
                $(this).css({'background-image':'url('+$(this).children('.first').attr('src')+')','background-size':'cover'});


            }else{
                var bsave = $(this);
                $('.active').css({'background-image':'url('+$('.active').children('.first').attr('src')+')','background-size':'cover'});
                if($('.tab_open').length < 1){
                    bsave.addClass('active');
                    $(bsave.data('to')).addClass('tab_open');
                    $(bsave.data('to')).fadeIn("fast",function(){
                        scrollToAnchor('.active');
                           
                    });        
                }else{
                    $('.tab_open').fadeOut("fast",function(){
                        $('.item').removeClass('active');
                        $('.wrapper').removeClass('tab_open');
                        bsave.addClass('active');
                        $(bsave.data('to')).addClass('tab_open');
                        $(bsave.data('to')).fadeIn("fast",function(){
                            scrollToAnchor('.active');
                               
                        });        
                                        
                    });
                }





            }    
        });
        //Portfolio Close
        $('.close').click(function(){
            var bsave = $(this);
            $('.wrapper').fadeOut();
            scrollToAnchor('.active', 0);
            $('.active').css({'background-image':'url('+$('.active').children('.first').attr('src')+')','background-size':'cover'});
            $('.item').removeClass('active');
        });








        //send mail
        $('#submit').click(function(){
            var email      = $('input[name=email]').val();
            var message    = $('textarea[name=message]').val();

            var message_entered = true;

            if(message=="") {  
                $('textarea[name=message]').css('border-color','red'); 
                message_entered = false;
            }else{
                $('textarea[name=message]').css('border-color','rgba(200,200,200,.5)'); 

            }
            if(email=="") {  
                $('input[name=email]').css('border-color','red'); 
                message_entered = false;
            }else{
                $('input[name=email]').css('border-color','rgba(200,200,200,.5)'); 

            }

            if(message_entered){
                post_data = {'email':email, 'message':message};

                $.post('mail.php', post_data, function(response){  

                    //load json data from server and output message     
                    if(response.type == 'error')
                    {
                        output = '<div class="error">'+response.text+'</div>';
                    }else{
                        output = '<div class="success">'+response.text+'</div>';
                        
                        //reset values in all input fields
                        $('#contact-form>input').val(''); 
                        $('#contact-form>textarea').val(''); 
                    }
                    
                    $(".content").hide().html(output).fadeIn();
                }, 'json');
            }

        });
    });