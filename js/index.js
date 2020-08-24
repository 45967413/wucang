jQuery(function () {
	function initBox() {
		w_width = jQuery(window).width();
		w_height = jQuery(window).height();
		$('.banner-swiper').css('height', w_height);
		$('.banner-item,.banner-item figure').css('height', w_height);
		setImgMax($('.banner-item figure img'), 1920, 1080, w_width, w_height);
	};
	initBox();
	jQuery(window).resize(function () {
		initBox();
	});

	new SplitText($('.banner-text strong'), {type: "chars"});
	new SplitText($('.banner-text small'), {type: "chars"});
	new SplitText($('.banner-text p'), {type: "chars"});
	
	$('.banner-swiper').on('init', function (event, slick, currentSlide, nextSlide) {
		$(".banner-item").eq(0).addClass("aimation").siblings().removeClass("aimation");
		$('.banner-line i').css({width:0}).stop().animate({width:100+'%'},5000,'linear');
		$(".banner-item").first().removeClass("slick-current");
		setTimeout(function(){
			$(".banner-item").first().addClass("slick-current");
		},50);
	});

	$(".banner-swiper").slick({
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
		responsive: [{
			breakpoint: 1024,
			settings: {
				dots: true,
			}
		}, ]
	}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		$('.banner-line i').css({width:0}).stop().animate({width:100+'%'},5000,'linear');
		$(".banner-item").eq(nextSlide).addClass("aimation").siblings().removeClass("aimation");
	});

});