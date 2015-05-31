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

				console.log("current = ", current);
				console.log("removing ", (current % 7));
				console.log("adding ", (current-1)%7);
		    	body.fadeOut(200, function(){
		    		backImg(current);
		    		current = ((current + 6) % 7);
		    	});
		    	console.log("after update, current = ", current);

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

		if (backgroundsLoaded[next+1] == 0){
	        loader.removeClass(backgrounds[next % backgrounds.length]);
		    loader.addClass(backgrounds[(next+1) % backgrounds.length]);
		    backgroundsLoaded[next+1] = 1;
		}

		body.removeClass(backgrounds[current % backgrounds.length]);
		body.addClass(backgrounds[(current+1) % backgrounds.length]);

	    body.fadeIn(1000);
	}

    function backImg(current) {

    	var backgrounds = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7'];
		var body = $('.home-bg');
    	body.removeClass(backgrounds[current % backgrounds.length]);
    	body.addClass(backgrounds[((current+6)%7) % backgrounds.length]);

    	body.fadeIn(1000);
    };


	function showHome() {

		var current = Math.floor(Math.random() * 7);
		var backgrounds = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7'];
		console.log(current);

		imagesLoaded('.home-bg', function(){
			$('.home-all').fadeIn(2000);
		});

		cycleBG(current);		
	}

});