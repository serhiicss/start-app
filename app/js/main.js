$(document).ready(function() {

	$(".burger-toggle").on('click', function(){
		$(this).toggleClass("burger-open");
		// $("nav.header-nav").css("display", "block");
		// $("nav.header-nav").toggle();
		$("nav.header-nav").slideToggle();
	})


	/*-----------------------------------------
 * Slick Slider
 -----------------------------------------*/

		$('.slick-slider').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
			arrows: false,
			pauseOnHover: true
		});

	
	/*-----------------------------------------
 * Replace all SVG img with inline SVG
 -----------------------------------------*/
 
 $('img.inline-svg').each(function(){
	var $img = $(this);
	var imgID = $img.attr('id');
	var imgClass = $img.attr('class');
	var imgURL = $img.attr('src');

	$.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var $svg = $(data).find('svg');

				// Add replaced image's ID to the new SVG
				if(typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}
				// Add replaced image's classes to the new SVG
				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');

				// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
				if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
				}

				// Replace image with new SVG
				$img.replaceWith($svg);

			}, 'xml');

 });



});