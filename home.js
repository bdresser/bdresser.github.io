$( document ).ready(function() {

	var timer;

	if(location.pathname === '/'){
			showHome();
			cycleBG();
	}

	function cycleBG() {
		var body = $('.home-content');
	    var backgrounds = [
	      'url(/assets/bg5.jpg) no-repeat center center fixed', 
	      'url(/assets/bg4.jpg) no-repeat center center fixed',
	      'url(/assets/bg7.jpg) no-repeat center center fixed',
	      'url(/assets/bg8.jpg) no-repeat center center fixed',
	      'url(/assets/bg9.jpg) no-repeat center center fixed',
	      'url(/assets/bg10.jpg) no-repeat center center fixed',
	      'url(/assets/bg11.jpg) no-repeat center center fixed'];
	    var current = 0;

	    function changeImg() {
	    	body.hide();
	    	body.css(
	            'background',
	        backgrounds[current = ++current % backgrounds.length]);
	        body.css('-webkit-background-size', 'cover');
	        body.css('-moz-background-size', 'cover');
	        body.css('-o-background-size', 'cover');
	        body.css('background-size', 'cover');
	        body.fadeIn(600);
	    }

	    function nextBackground() {
		    	body.fadeOut(200, changeImg);
		        timer = setTimeout(nextBackground, 5000);
	    }

	    timer = setTimeout(nextBackground, 5000);
	    body.css('background', backgrounds[0]);
	    body.css('-webkit-background-size', 'cover');
        body.css('-moz-background-size', 'cover');
        body.css('-o-background-size', 'cover');
        body.css('background-size', 'cover');

	
	}

	function clearHome(){
		clearTimeout(timer);
		$('body').css('background-color', 'white');
		$('.home-content').fadeOut(400);
	}

	function clearPhoto(){
		$('.photo-page').fadeOut(500);
	}

	function showHome() {
		$('.home-content').fadeIn(600);
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

	// $(".back-button").click(function(){
	// 	showHome();
	// })

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

	// Path.map("#/something").enter(showHome()).to(function(){
	// 	showHome();
	// 	$('.photo-page').hide();
	// });

	
	Path.listen();

	// function photo(){
	// 	console.log("hello world");
	// 	//$('html').css("background", "none");
	// 	$('.indicator').text("on the photopage");
	// }

	// function home(){
	// 	$('.indicator').text("on the homepage");
	// }

	// function web(){

	// }

	// $('.photo' )
	// 	.mouseenter(function(e) {
	// 		$('.photo-link').addClass("white");
	// 	})
	// 	.mouseleave(function(e) {
	// 		$('.photo-link').removeClass("white");
	// 	});

	// $('.web' )
	// 	.mouseenter(function(e) {
	// 		$('.web-link').addClass("white");
	// 	})
	// 	.mouseleave(function(e) {
	// 		$('.web-link').removeClass("white");
	// 	});

});