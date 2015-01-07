$( document ).ready(function() {

	// "Global" background timer
	var timer;
	var current;

	// If we are on bobbydresser.com/
	// load homepage and start background images 
	if(location.pathname === '/'){
			showHome();
	}

	function preload(arrayOfImages) {
	    $(arrayOfImages).each(function(){
	        $('<img/>')[0].src = this;
	    });
	}


	// Rotate background image on timer
	function cycleBG() {

		var body = $('.home-bg');
		// var loader = $('.loader');
	    var backgrounds = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7'];
	    current = 0;

	    if(body.hasClass('bg7')) { current = 6;}
	    if(body.hasClass('bg6')) { current = 5;}
		if(body.hasClass('bg5')) { current = 4;}
	    if(body.hasClass('bg4')) { current = 3;}
	    if(body.hasClass('bg3')) { current = 2;}
	    if(body.hasClass('bg2')) { current = 1;}
	    if(body.hasClass('bg1')) { current = 0;}
	    
	    function changeImg() {
	    	body.hide();
	    	body.removeClass(backgrounds[current]);
	    	body.addClass(backgrounds[current = ++current % backgrounds.length]);
	        body.fadeIn(1000);
	    }

	    function nextBackground() {
		    	body.fadeOut(200, changeImg);
		        timer = setTimeout(nextBackground, 5000);
	    }

	    // begin timer
	    timer = setTimeout(nextBackground, 5000);
	}


	// Handle page changes
	function clearHome(){
		clearTimeout(timer);
		$('body').css('background-color', 'white');
		$('.home-all').fadeOut(400);
	}

	function showHome() {

		$('body').css('background-color', 'black');

		if($('.home-bg').css("background-size") === 'auto'){
			$('.home-bg').addClass('bg1');			
		}

		
		$('.home-bg').show();
		$(window).load(function(){
			$('.home-all').fadeIn(800);
		})
		

		pic = new Image();
		pic2 = new Image();
	    pic3 = new Image();
	    pic4 = new Image();
	    pic5 = new Image();
	    pic6 = new Image();
	    pic.src="/assets/cover2.jpg";
	    pic2.src="/assets/cover3.jpg";
	    pic3.src="/assets/cover4.jpg";
	    pic4.src="assets/cover5.jpg";
	    pic5.src="assets/cover6.jpg";
	    pic6.src="assets/cover7.jpg";

		cycleBG();
	}

	function showPhoto() {
		$('.photo-page').fadeIn(500);
	    
	    // Fade images in when they appear in window
    	$(window).scroll( function(){
	        $('.fader').each( function(i){
	            var top_of_object = $(this).position().top;
	            var bottom_of_window = $(window).scrollTop() + $(window).height();
	            if( bottom_of_window > (top_of_object+100) ){
	                $(this).animate({'opacity':'1'},500);
	            }
	        });     
	    });
	}

	function showWeb() {
		$('.web-page').fadeIn(400);
	}

	$('.photo-side').click(function(){
		clearHome();
	});

	$('.web-side').click(function(){
		clearHome();
	});



	Path.map("#/photo").enter(showPhoto).to(function(){
 		$('.home-all').hide();
 		clearHome();
 		$("img").unveil(200);
	}).exit(function(){
		$('.photo-page').fadeOut(400);
		showHome();
	});

	Path.map("#/web").enter(showWeb).to(function(){
 		$('.home-all').hide();
 		clearHome();
	}).exit(function(){
		$('.web-page').fadeOut(400);
		showHome();
	});
	
	Path.listen();

	$(".to-top").click(function() {
		console.log("to top");
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});

});