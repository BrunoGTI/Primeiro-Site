$('.sliderPrincipal').slick({
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	adaptiveHeight: true
});

$('.carrosVendas').slick({
	slidesToShow: 4,
	slidesToScroll: 4
  });
  
  var filtered = false;
  
  $('.js-filter').on('click', function(){
	if (filtered === false) {
	  $('.filtering').slick('slickFilter',':even');
	  $(this).text('Unfilter Slides');
	  filtered = true;
	} else {
	  $('.filtering').slick('slickUnfilter');
	  $(this).text('Filter Slides');
	  filtered = false;
	}
  });