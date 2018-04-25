$(document).ready(function(){

	$('.curtains>li').css('position', 'fixed');

   $('.curtains').curtain();
   
	var scrollorama = $.scrollorama({
		blocks:'.curtains'
	});
    
    
    scrollorama.animate('.mask1',{
      delay:0, duration:8000, property:'zoom', start:1, end:220
    });

    

    
 
    

  
  
    
    scrollorama.animate('.plane',{
      delay:7600, duration:993, property:'left', start:-1500, end:-100
    });
     
    scrollorama.animate('.cloud',{
      delay:6000, duration:993, property:'left', start:-600, end:500
    });

     scrollorama.animate('.back2',{
      delay:7000, duration:993, property:'opacity', start:0, end:1
    });
     
     scrollorama.animate('.fire',{
      delay:7600, duration:993, property:'right', start:-1500, end:-200
    });
     
     scrollorama.animate('.whaam',{
      delay:8400, duration:293, property:'right', start:-1500, end:400
    });

    

     scrollorama.animate('.hand1',{
      delay:10000, duration:1093, property:'left', start:-800, end:-10
    });

     scrollorama.animate('.hand2',{
      delay:10000, duration:1093, property:'right', start:-800, end:-10
    });
    
   
    
    scrollorama.animate('.exhibitiontag',{
      delay:12230, duration:1093, property:'bottom', start:0, end:993
    });

     

   
 
   
   
});



    $(document).ready(function(){

      $(".arrow").click(function(){

        $("html, body"). animate({

          scrollTop: $(".endpoint").offset().top

        },3000);

      })


    });
        
