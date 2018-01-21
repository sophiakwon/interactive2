$(document).ready(function(){
	
	$('#button-3').click(function() {
		$(this).animate({
			opacity: 0.4,
			marginLeft: '0.6in',
			borderWidth: '10px'
		}, 1000 );
	});

	
	$('#button-4').hover(function() {
		$(".item").toggleClass('pulse');
	});

	$('#button-9').hover(function() {			
		$(this).toggleClass("eat");
	});

	


  $('#button-13').click(function() {
  		
  		$( '#button-13' ).toggle( 'scale' );
	});
  $('#button-14').click(function() {
  		
  		$( '#button-13' ).show( 'scale' );
	});

  $(function() {
	
			$(".ripple").mousedown(function(e) {
			var ink = new Ink($(this), e);
			});

			function Ink(parent, e) {
		
				this.el = $("<span>", { class: "ink" });

				parent.prepend(this.el);

				d = Math.max(parent.outerWidth(), parent.outerHeight());
				this.el.css({ height: d, width: d });

				x = e.pageX - parent.offset().left - d / 2;
				y = e.pageY - parent.offset().top - d / 2;

				this.el
					.css({ top: y + "px", left: x + "px" })
					.addClass("ink-animate");

				this.destroy(900);
		
			}

			Ink.prototype.destroy = function(time) {
		
				var that = this; 
		
				setTimeout(function() {
					that.el.remove();
					that = undefined;
				}, time);
			};
	
	});
$('#button-16').mousemove(function (e) {

        pointer = $('<img>').attr({
            'src': 'assets/point.png'
        });

        $(document.body).append(pointer);


        pointer.css({
            'position': 'absolute',
            top: e.pageY + 2, 
            left: e.pageX + 2 
        }).fadeOut(1500);
    });

$('#button-17').hover(function() {
		$(".item").toggleClass('random8a');

	});
var button18= true;
	$('#button-18').click(function() {
		if (button18==true) {
    	 	$("body").css("filter", "invert(100%)");
    	 	button18=false;
    	}
		else {
            $("body").css("filter", "invert(0%)");
            button18=true;
        }
	});  

$('#button-19').hover(function() {
		$(".item").toggleClass('random2a');

	});

$('#button-23').hover(function() {
		$(".item").toggleClass('random6a');

	});

	
	$( '#button-26' ).click(function() {
  		alert( 'Seriously, I kinda ran out of hover ideas when I got to button 26.' ); 
	});

  

	$
	$('#button-28').click(function() {
    	$('#twentytwo').html(function(i, val) { return val*1+1 });
	});  
 
	


var n = 1;

  $('#button-24').click(function() {
  	
  	if (n < 300) {
  		$(this).css('background', 'rgb('+n+', '+n+','+n+')');
  		n = n+35;
	} 

  	if (n > 300) {
    	$(this).css('background', 'rgb('-n-', '-n-','-n-')');
    	n = n-335;
  	}

function flash(e){
  		$('.flash')
   			.show()  
   			.animate({opacity: 0.5}, 300) 
   			.fadeOut(300)
   			.css({'opacity': 1});
		}

		$('#button-28').ready(function() {    
  			$('.flash').hide();  
  			$('#button-28').mouseup(function(e) { flash(e); });
	});

	});

	$('#button-30').click(function() {
      
      	if($('#31').css('display')!='none'){
    		$('#30').show().siblings('div').hide();
    		$('#ten').show().siblings('div').hide();
    	}

    	else if($('#30	').css('display')!='none'){
       		$('#31').show().siblings('div').hide();
       		$('#eight').show().siblings('div').hide();
    	}
    });

    var button31= true;
	$('#button-31').click(function() {
		if (button31==true) {
    	 	$("#button-31").css("transform", "scale(20)");
    	 	button31=false; 
    	}
		else {
            $("#button-31").css("transform", "scale(1)");
            button21=true;
        }
	});  

	 $('#button-32').click(function(){
        $('#twenty').css('font-size', 500*Math.random() + 'px');
    });
  

	$('#button-33').hover(function() {
		$(".item").toggleClass('random4a');

	});

	$('#button-34').hover(function() {
		$(".item").toggleClass('random5a');

	});

	var button35= true;
	$('#button-35').click(function() {
		if (button35==true) {
    	 	$("#twentythree").css("transform", "rotate(-90deg)");
    	 	button35=false;
    	}
		else {
            $("#twentythree").css("transform", "rotate(0deg)");
            button35=true;
        }
	});  

	$('#button-36').hover(function() {
		$(".item").toggleClass('random7a');

	});

	
	$('#button-38').hover(function() {
		$(".item").toggleClass('random9a');

	});

	$('#button-39').hover(function() {
		$(".item").toggleClass('random10a');

	});

	$('#button-40').hover(function() {
		$(".item").toggleClass('random11a');

	});

	$('#button-41').hover(function() {
		$(".item").toggleClass('random12a');

	});

	$('#button-42').hover(function() {
		
		$(".item").toggleClass('random19a');

	});


	$('#button-20').hover(function() {
		$(".item").toggleClass('random13a');

	});

	$('#button-43').hover(function() {
		
		$(".item").toggleClass('random14a');

	});

	$('#button-44').hover(function() {
		
		$(".item").toggleClass('random15a');

	});

	$('#button-45').click(function(){
    	$(this).animate({borderLeftWidth: "10px"});
    });

    $("#button-45").click(function(){
        $(this).animate({width: "-=100px"});
    });

 $('#button-46').click(function(){
       window.close();

  });
	var button47= true;
	$('#button-47').click(function() {
		if (button47==true) {
    	 	$("#twentysix").css("transform", "skewX(20deg)");
    	 	button47=false;
    	}
		else {
            $("#twentysix").css("transform", "skewX(0deg)");
            button47=true;
        }
		}); 

	var button48= true;
	$('#button-48').click(function() {
		if (button48==true) {
    	 	$("#button-48").css("transform", "scale(0.2)");
    	 	button48=false; 
    	}
		else {
            $("#button-48").css("transform", "scale(1)");
            button48=true;
        }
	});


	$('#button-49').hover(function() {
		
		$(".item").toggleClass('random20a');

	});

	$('#button-50').click(function () {
      $("html, body").animate({ scrollTop: "0" },  500);
    });


$('#button-9').click(function() {			
		$(this).toggleClass("eat");
	});
	});



/* 12 */

	$( function() {
    	$( '#drags' ).draggable();
	});










