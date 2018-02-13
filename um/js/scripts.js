$(document).ready(function(){

	$('.curtains>li').css('position', 'fixed');

   $('.curtains').curtain();
   
	var scrollorama = $.scrollorama({
		blocks:'.curtains'
	});
    
    
    scrollorama.animate('.mask1',{
      delay:0, duration:3500, property:'opacity', start:1, end:0.3
    });

    scrollorama.animate('.comic',{
      delay:0, duration:500, property:'opacity', start:0, end:1
    });

    
 
    scrollorama.animate('.mask2',{
      delay:2500, duration:3500, property:'opacity', start:0.3, end:1
    });

  
  
    
    scrollorama.animate('.plane',{
      delay:7600, duration:993, property:'left', start:-1500, end:-100
    });
     
    scrollorama.animate('.cloud',{
      delay:6000, duration:993, property:'left', start:-600, end:500
    });

     scrollorama.animate('.back2',{
      delay:7200, duration:993, property:'opacity', start:0, end:1
    });
     
     scrollorama.animate('.fire',{
      delay:7600, duration:993, property:'right', start:-1500, end:-200
    });
     
     scrollorama.animate('.whaam',{
      delay:8400, duration:293, property:'right', start:-1500, end:400
    });

     scrollorama.animate('.aboutartist',{
      delay:9188, duration:700, property:'bottom', start:0, end:700
    });

     scrollorama.animate('.hand1',{
      delay:11000, duration:1093, property:'left', start:-800, end:-10
    });

     scrollorama.animate('.hand2',{
      delay:11000, duration:1093, property:'right', start:-800, end:-10
    });
    
   
    
    scrollorama.animate('.exhibitiontag',{
      delay:12230, duration:993, property:'bottom', start:0, end:993
    });

     scrollorama.animate('.bullet',{
      delay:14030, duration:2093, property:'zoom', start:0.04, end:1.5
    });

     scrollorama.animate('.varoom',{
      delay:14130, duration:93, property:'zoom', start:0, end:1
    });

     scrollorama.animate('.varoom',{
      delay:14180, duration:93, property:'opacity', start:1, end:0
    });

      scrollorama.animate('.artworkused',{
      delay:16000, duration:900, property:'bottom', start:0, end:900
    });

scrollorama.animate('.credit',{
      delay:17700, duration:100, property:'bottom', start:-200, end:-50
    });

   
 
   
   
});



    $(document).ready(function(){

      $(".arrow").click(function(){

        $("html, body"). animate({

          scrollTop: $(".endpoint").offset().top

        },3000);

      })


    });
        
