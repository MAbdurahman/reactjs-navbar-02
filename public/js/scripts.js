/* ==========================================
            Preloader
============================================= */
$(window).on('load', function () {
	// makes sure that whole site is loaded
	$('#preloader--gif, #preloader').fadeOut(2550, function () {});
});


/* ==========================================
            Simple-Scroll-Spy
============================================= */
window.onload = function () {
	/* scrollSpy('#navbar-list', {
		sectionClass: '.scrollspy',
		menuActiveTarget: '.nav-item > a',
		activeClass: 'active',
		offset: 0,
	}); 
	*/

	/* $(document).on('scroll', function () {
		let pageIDs = $('a.nav-link');
		pageIDs.each(function () {
			let page = $(this).attr('href');
			let pageOffset = $(page).offset().top;
			let pageHeight = $(page).outerHeight();
			let pageBottom = pageOffset + pageHeight;
			let scrolledPosition = $(document).scrollTop();

			if (
				scrolledPosition < pageBottom - 70 &&
				scrolledPosition >= pageOffset - 70
			) {
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		});
	}); */
};
