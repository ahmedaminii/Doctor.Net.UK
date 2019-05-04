$(document).ready(function(){
    
    
    (function sliderAuto(){   
     $('.slider .active').each(function(){ 
  if(!$(this).is(':last-child')){ 
    $(this).delay(1000).fadeOut(2000,function(){ 
   $(this).removeClass('active').next().addClass('active').fadeIn();
                 
   sliderAuto();
   })
     }else{
             
      $(this).delay(1000).fadeOut(1000 , function(){
        $(this).removeClass('active');
        $('.slider div').eq(0).addClass('active').fadeIn();
      sliderAuto();
             });    
              }    
             })  
           }());
    //end slider Here//
    $(function(){
       $(window).on("scroll" , function(){   
        var scl = $(window).scrollTop();    
        if(scl > 100){     
       $('.navbar').addClass('nav-new');
        $('.up-dwon i').removeClass('far fa-arrow-alt-circle-down').addClass('far fa-arrow-alt-circle-up');    
        } else{
        $('.up-dwon i').removeClass('far fa-arrow-alt-circle-up').addClass('far fa-arrow-alt-circle-down');    
        $('.navbar').removeClass('nav-new').addClass('nav-newtwo');  
        }       
       })     
    });
    //end navbar;//
    
    $('.up-dwon').click(function(){
    $("body").animate({scrollTop:"0"},1500)   
        
    })
    //end click up//
   
    
    
})
