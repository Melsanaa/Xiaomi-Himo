$(function(){
	$('.bike-slider, .slider__items').slick({
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
	});

	$(".menu, .bike__column").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});