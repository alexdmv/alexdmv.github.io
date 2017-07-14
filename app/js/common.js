$(function() {


//-----------------------------------------
// Smooth scrolling
// http://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link

var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});


//-----------------------------------------
// Owl Carousel

	$(".reviews").owlCarousel({
		loop: true,
		items: 1,
		dots: true,
		autoplay: true,
		autoplayTimeout: 12000,
		autoplayHoverPause: true,
		// autoHeight: true
	});

//----end JQ
});


//-----------------------------------------
// content bg-images same height as item-content
function sameHeightItem() {
	$('.feature-item').each(function() {
		var ths = $(this),
		thsh = ths.find('.feature-item-content').outerHeight();
		ths.find('.feature-item-image').css('min-height', thsh);
	});
}sameHeightItem();


//-----------------------------------------
// Calculates header height to fit all contents into 
// viewport on mobile

function calcVH() {
	$('#site-header').innerHeight( $(this).innerHeight() );
}
(function($) { 
	calcVH();
	$(window).on('orientationchange', function() {
		calcVH();
	});
})(jQuery);





