$( document ).ready(function() {

	$('.read-more').click(function() {

		// project number ==
		$('.read-more').hide();
		$('.expanded').show();

	});

	$('.read-less').click(function() {
		$('.expanded').hide();
		$('.read-more').show();
		var element = $(this).closest('.project');

		$('html, body').stop().animate({
		   scrollTop: element.offset().top - 50
		}, 500);
	})

});
