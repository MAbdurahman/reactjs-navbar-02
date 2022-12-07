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
	scrollSpy('#navbar-list', {
		sectionClass: '.scrollspy',
		menuActiveTarget: '.nav-link',
		offset: 100,
	});
};