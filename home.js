$( document ).ready(function() {

	if(location.pathname === '/'){
			showHome();
	}

	function clearHome(){
		console.log("clear home called");
		$('.home-content').fadeOut(500);
	}

	function clearPhoto(){
		$('.photo-page').fadeOut(500);
	}

	function showHome() {
		$('.home-content').fadeIn(600);
	}

	function showPhoto() {
		$('.photo-page').fadeIn(400);
	}

	$('.photo-side').click(function(){
		clearHome();
	});

	// $(".back-button").click(function(){
	// 	showHome();
	// })

	Path.map("#/photo").enter(showPhoto).to(function(){
 		$('.home-content').hide();
	}).exit(function(){
		clearPhoto();
		console.log(location.pathname);
		if(location.pathname === '/'){
			showHome();
		}
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

	$('.photo' )
		.mouseenter(function(e) {
			$('.photo-link').addClass("white");
		})
		.mouseleave(function(e) {
			$('.photo-link').removeClass("white");
		});

	$('.web' )
		.mouseenter(function(e) {
			$('.web-link').addClass("white");
		})
		.mouseleave(function(e) {
			$('.web-link').removeClass("white");
		});

});