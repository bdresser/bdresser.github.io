$( document ).ready(function() {

	// load image 100px before it appears
	$(".fader").unveil(150);

	// Fade images in when they appear in window ;)
	$(window).scroll( function(){
        $('.fader').each( function(i){
            var top_of_object = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > (top_of_object + 100)){
                $(this).animate({'opacity':'1'},500);
            }
        });     
    });

	$(".to-top").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});

});