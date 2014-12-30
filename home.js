$( document ).ready(function(){

	//page.base('');
	page('/', home);
	page('/photo', photo);
	page('/web', web);
	page();

	function photo(){
		console.log("hello world");
		//$('html').css("background", "none");
		$('.indicator').text("on the photopage");
	}

	function home(){
		$('.indicator').text("on the homepage");
	}

	function web(){

	}

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