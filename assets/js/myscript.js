$(document).ready(function() {

	var nav = $('.navbar'),
		doc = $(document),
		win = $(window);

	win.scroll(function() {

		if (doc.scrollTop() > 80) {
			nav.addClass('scrolled');
		} else {
			nav.removeClass('scrolled');
		}

	});

	// Trigger the scroll listener on page load
	
	win.scroll();


	var options = {

    facebook : true,
    linkedin : true,
    github : true,
};

$('.socialShare').shareButtons(options);
});