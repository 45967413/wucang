jQuery(function () {
	function initBox() {
		w_width = jQuery(window).width();
		w_height = jQuery(window).height();
		let mtop = jQuery('.mtop').height();
		$('.banner-swiper').css('height', w_height-mtop);
		$('.banner-item,.banner-item figure').css('height', w_height-mtop);
		setImgMax($('.banner-item figure img'), 1920, 814, w_width, w_height-mtop);
	};
	initBox();
	jQuery(window).resize(function () {
		initBox();
	});

	$('.banner').on('init', function (event, slick, currentSlide, nextSlide) {
		$(".banner-item").first().removeClass("slick-current");
		setTimeout(function(){
			$(".banner-item").first().addClass("slick-current");
		},50);
		TweenLite.to($(".banner-item").eq(0).find('figure img'),0,{scale:1.15})
		TweenMax.to($(".banner-item").eq(0).find('figure img'),5.4,{scale:1,ease:Power0.easeNone});
	});

	$(".banner").slick({
		centerPadding: '0',
		autoplaySpeed: 5000,
		speed: 1800,
		arrows: false,
		dots: true,
		infinite: true,
		autoplay: true,
		pauseOnHover: false,
		fade: true,
		focusOnSelect: true,
		prevArrow: $('.banner-btns span.prev'),
		nextArrow: $('.banner-btns span.next'),
	}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		TweenLite.to($(".banner-item").eq(nextSlide).find('figure img'),0,{scale:1.15})
	    TweenMax.to($(".banner-item").eq(nextSlide).find('figure img'),5.4,{scale:1,ease:Power0.easeNone})
	});

});