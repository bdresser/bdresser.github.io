$( document ).ready(function() {

	showHome();

	// Rotate background image on timer
	function cycleBG(current) {

		var body = $('.home-bg');

		// change the background image and set timer
	    function nextBackground() {

	    	body.fadeOut(200, function(){
	    		changeImg(current);
	    		current++;
	    	});

	        timer = setTimeout(nextBackground, 5000);
	    }

	    // begin slideshow
	    timer = setTimeout(nextBackground(), 5000);

	    // handle arrow press
		$('body').keydown(function(e) {
			if(e.keyCode == 37) { // left

				clearTimeout(timer);

		    	body.fadeOut(200, function(){
		    		backImg(current);
		    		current = ((current + 6) % 7);
		    	});

		    }

		  	else if(e.keyCode == 39) { // right

		  		clearTimeout(timer);

		    	body.fadeOut(200, function(){
		    		changeImg(current);
		    		current++;
		    	});
		  	}	

		});

	}

	function changeImg(current) {
		var next = current + 1;
		var body = $('.home-bg');
		var loader = $('.loader');
		var backgrounds = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7'];
		var backgroundsLoaded = [0,0,0,0,0,0,0];

		body.removeClass(backgrounds[current % backgrounds.length]);
		body.addClass(backgrounds[(current+1) % backgrounds.length]);

	    body.fadeIn(1000);

	        loader.removeClass(backgrounds[next % backgrounds.length]);
		    loader.addClass(backgrounds[(next+1) % backgrounds.length]);


	}

    function backImg(current) {

    	var backgrounds = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7'];
		var body = $('.home-bg');
    	body.removeClass(backgrounds[current % backgrounds.length]);
    	body.addClass(backgrounds[((current+6)%7) % backgrounds.length]);

    	body.fadeIn(1000);
    };


	function showHome() {

		var body = $('.home-bg');
		var current = Math.floor(Math.random() * 7);
		var backgrounds = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7'];

		body.addClass(backgrounds[current]);

		// fade page in once background is loaded
		imagesLoaded(body, function(){
			$('.home-all').fadeIn(2000);
		});

		$('.loader').addClass(backgrounds[(current+1) % backgrounds.length]);

		// wait, then start slideshow with next img
		setTimeout(function(){
			cycleBG(current);
		}, 5000);

	}

});