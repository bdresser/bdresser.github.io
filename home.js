$( document ).ready(function() {

	// "Global" background timer
	var timer;

	// If we are on bobbydresser.com/
	// load homepage and start background images 
	if(location.pathname === '/'){
			showHome();
			cycleBG();
	}

	// Rotate background image on timer
	function cycleBG() {
		var body = $('.home-content');
	    var backgrounds = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6'];
	    var current = 0;

	    function changeImg() {
	    	body.hide();
	    	body.removeClass(backgrounds[current]);
	    	body.addClass(backgrounds[current = ++current % backgrounds.length]);
	        body.fadeIn(600);
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
		$('.home-content').fadeOut(400);
	}

	function clearPhoto(){
		$('.photo-page').fadeOut(500);
	}

	function showHome() {
		$('.home-content').fadeIn(400);
		$('.home-content').addClass('bg1');
	}

	function showPhoto() {
		$('.photo-page').fadeIn(500);
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
 		$('.home-content').hide();
 		clearHome();
	}).exit(function(){
		clearPhoto();
		console.log(location.pathname);
		if(location.pathname === '/'){
			showHome();
		}
	});

	Path.map("#/web").enter(showWeb).to(function(){
 		$('.home-content').hide();
 		clearHome();
	}).exit(function(){
		$('.web-page').fadeOut(400);
	});
	
	Path.listen();

});