$( document ).ready(function(){

	$('body').fadeIn(1000);

	function photo(){
		console.log("hello world");
		//$('html').css("background", "none");
		$('.indicator').text("on the photopage");
	}

	function home(){
		$('.indicator').text("on the homepage");
	}

	page.base('');
	page('/', home);
	page('/photo', photo);
	page();

	// $('.photo-side').click(function(e){
	// 	page('/photo');
	// 	e.preventDefault();
	// });

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