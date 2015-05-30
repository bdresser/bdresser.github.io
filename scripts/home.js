$( document ).ready(function() {

	showHome();

	// Rotate background image on timer
	function cycleBG(current) {

		var body = $('.home-bg');

	    function nextBackground() {

	    	console.log(current);

	    	body.fadeOut(200, function(){
	    		changeImg(current);
	    		current++;
	    	});
	    	

	        timer = setTimeout(nextBackground, 5000);
	    }

	    // begin timer
	    timer = setTimeout(nextBackground(), 5000);

	    // handle arrow press
		$('body').keydown(function(e) {
			if(e.keyCode == 37) { // left

				console.log('left');
		    	clearTimeout(timer);
		    	backImg(current);

		    }

		  	else if(e.keyCode == 39) { // right

		  	}	

		});

	}

	function changeImg(current) {
		var next = current + 1;
		var body = $('.home-bg');
		var loader = $('.loader');
		var backgrounds = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7'];

        loader.removeClass(backgrounds[next % backgrounds.length]);
	    loader.addClass(backgrounds[(next+1) % backgrounds.length]);

		body.removeClass(backgrounds[current % backgrounds.length]);
		body.addClass(backgrounds[(current+1) % backgrounds.length]);

	    body.fadeIn(1000);
	}

    function backImg(current) {
    	var backgrounds = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7'];
		var body = $('.home-bg');
    	body.removeClass(backgrounds[current]);
    	body.addClass(backgrounds[current-- % backgrounds.length]);
    };


	function showHome() {

		var current = Math.floor(Math.random() * 7);
		var backgrounds = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7'];
		$('.home-bg').addClass(backgrounds[current]);
		$('.loader').addClass(backgrounds[current+1]);
		console.log(current);

		imagesLoaded('.home-bg', function(){
			$('.home-all').fadeIn(2000);
		});

		cycleBG(current);
		
	}

});