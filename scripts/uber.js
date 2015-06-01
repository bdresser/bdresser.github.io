$( document ).ready(function() {

	$(window).scroll(function(){
	    $(".title-one").css("opacity", 1 - $(window).scrollTop() / 250);
	  });

});