$(document).ready(function(){

	$('.curtains>li').css('position', 'fixed');

   $('.curtains').curtain();
   
	var scrollorama = $.scrollorama({
		blocks:'.curtains'
	});

    
    scrollorama.animate('.title',{
      delay:100, duration:2500, property:'opacity', start:1, end:0.
    });

       scrollorama.animate('.pizza',{
      delay:960, duration:1300, property:'top', start:-500, end:1500
    });

        scrollorama.animate('.pizza',{
      delay:1000, duration:1200, property:'zoom', start:1, end:2
    });


           scrollorama.animate('.pistachio',{
      delay:1360, duration:900, property:'top', start:-500, end:1500
    });



           scrollorama.animate('.strawberry',{
      delay:560, duration:600, property:'top', start:-500, end:1500
    });
    

    
    scrollorama.animate('.donut',{
      delay:1400, duration:2200, property:'bottom', start:00, end:00
    });

      scrollorama.animate('.donut',{
      delay:1430, duration:2300, property:'zoom', start:-20, end:2
    });


    scrollorama.animate('.donut',{
      delay:1500, duration:1400, property:'top', start:-150, end:1000
    });

        scrollorama.animate('.corndog',{
      delay:2000, duration:1200, property:'zoom', start:1, end:4
    });

          scrollorama.animate('.corndog',{
      delay:2200, duration:1800, property:'top', start:-850, end:1400
    });

    scrollorama.animate('.icecream',{
      delay:2700, duration:2000, property:'zoom', start:-30, end:0
    });

          scrollorama.animate('.icecream',{
      delay:2700, duration:1800, property:'top', start:-1750, end:850
    });

   scrollorama.animate('.icecream',{
      delay:2700, duration:500, property:'bottom', start:-50, end:800
    });
 
 scrollorama.animate('.donut2',{
      delay:2700, duration:1800, property:'bottom', start:00, end:700
    });


    scrollorama.animate('.donut3',{
      delay:3800, duration:1200, property:'top', start:-1150, end:700
    });
   
   scrollorama.animate('.pizza2',{
      delay:3800, duration:2200, property:'top', start:-1150, end:1300
    });

   scrollorama.animate('.corndog2',{
      delay:3800, duration:2200, property:'top', start:-1150, end:1300
    });
    scrollorama.animate('.corndog2',{
      delay:7900, duration:1300, property:'zoom', start:1.5, end:5
    });
   
   scrollorama.animate('.icecream2',{
      delay:3800, duration:2200, property:'top', start:-1150, end:1300
    });

   $('donut3').click(function () {
      $("html, body").animate({ scrollTop: "0" },  500);
    });


});

        
