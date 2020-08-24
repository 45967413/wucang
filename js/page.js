var isTouch = Modernizr.touch,
	isMobile = false, //区分移动端与PC端
	mobile = false, //区分手机端与平板
	w_width = 0,
	w_height = 0,
	bannerImgh = 638,
	navItem = 0,
	h_height = 0,
	roll = 0,
	sTop = 150,
	produs = 0,
	ST = 0;

var _mousemove;
var _click;
var _mousedown;
var _mouseup;

//移动端事件和PC事件的切换
if (Modernizr.touch) {
	_mousemove = "touchmove";
	_click = "touchend";
	_mousedown = "touchstart";
	_mouseup = "touchend";
} else {
	_mousemove = "mousemove";
	_click = "click";
	_mousedown = "mousedown";
	_mouseup = "mouseup";
};

function pageBox() {
	w_width = jQuery(window).width();
	w_height = jQuery(window).height();


	//设置移动端参数
	if (w_width <= 1024) {
		isMobile = true;
	} else if (w_width > 1024) {
		isMobile = false;
	};
	//区分手机端和平板
	if (w_width <= 640) {
		mobile = true;
	} else if (w_width > 640) {
		mobile = false;
	};
}
pageBox();
jQuery(window).resize(function() {
	pageBox();
});


var flag = 1;
var commonjs = {
	init: function() {
		this.getScroll();
		this.getClick();
		this.getLoader();
	},
	getScroll: function () {
		function b(){
		var s = $(window).scrollTop();
			s > 10 ? $(".header").addClass("scroll"): $(".header").removeClass("scroll");
			if($('.theme-home').length > 0) {
				s > 10 ? $(".theme-page-wrpas").addClass("move"): $(".theme-page-wrpas").removeClass("move");
				s > 10 ? $(".mouses1").addClass('fade'): $(".mouses1").removeClass('fade');
				if(s < w_height / 2 && !isMobile) {
					$(".leval-menu-list li").removeClass("active");
				}
			}
			
		}
		$(window).scroll(b),
		b();
	},
	getClick: function() {
		$(".menubtn").click(function(){
			$(this).stop().toggleClass("active");
			$(".navigate").stop().toggleClass("show");
		});
		$(document).ready(function(){
	        var indexs=$(".leval-menu-list li.active").index();
	    	var now=$(".leval-menu-list li").width()*indexs;
	    	$(".leval-menu").animate({scrollLeft:now});
		});

		$(".copy a.links").click(function () {
			$(".pop-link").addClass('show');
		});
		$(".pop-close").click(function () {
			$(".pop-link").removeClass('show');
		})
	},
	getLoader: function() {
		if($("img.lazy").length > 0){
			$("img.lazy").lazyload({
				effect: "fadeIn",
				placeholder: "images/loading.gif"
			})
		}
		if($(".leval-menu-list").length> 0 && !isMobile){
			$('.leval-menu-list').onePageNav({
				filter: ':not(.external)',
			});
		}		
	},
	
	getHashs: function() {
		var hash = location.hash;
		jQuery(".footer-item dd p a").click(function(e){
			var hash=jQuery(this).attr("href").split("#")[1];
			if(hash && jQuery("#"+hash).length==1){
				setScroll("#"+hash);
			}
			$(".menubtn").removeClass("active");
			$(".navigate").stop().removeClass("show");
			$(".navigate").stop().animate({height: 0},1000,"easeOutQuint");
			flag = 1;
		});
		getHash();
		function getHash(){
			if(hash){
				setScroll(hash);
			}
		};
		var scnum=0;
		function setScroll(anchorCur){
			scnum=$('.header').outerHeight();
		    jQuery("html,body").animate({ scrollTop: jQuery(anchorCur).offset().top-scnum},1000,"easeOutQuint");
		};
	}
};

window._bd_share_config = { "common": { "bdSnsKey": {}, "bdText": "", "bdMini": "2", "bdMiniList": false, "bdPic": "", "bdStyle": "0", "bdSize": "16" }, "share": {} }; with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];

jQuery(window).load(function() {
	jQuery('.article-block').delay(300).scrollClass();
	commonjs.init();
});

(function(jQuery) {
	$.fn.scrollClass = function(config) {
		var defaults = {};
		var config = jQuery.extend(defaults, config);
		var target = this;

		function addAction() {
			var length = target.length;
			for (var i = 0; i < length; i++) {
				if (target.eq(i).hasClass('articleShow')) continue;

				var in_position = target.eq(i).offset().top + 120;
				var window_bottom_position = jQuery(window).scrollTop() + jQuery(window).height();
				if (in_position < window_bottom_position) {
					target.eq(i).addClass('articleShow');
				}
			}
		}
		addAction();

		jQuery(window).on('scroll', function() {
			addAction();
		});
		return target;
	};
})(jQuery);

setPopUp($('.weix1'), "微信公众号");

function setPopUp(obj, title) {
	obj.click(function() {
		var str = '<div class="popUpblack"><div class="popUp"><div class="t">' + title +
			'<span class="close">关闭</span></div><div class="img"><img src="' + obj.attr("href") + '"/></div></div></div>';
		$("body").append(str);
		jQuery(".popUpblack").fadeIn();
		jQuery(".popUp").animate({
			marginTop: "-127"
		}, 400);
		$(".popUp .close").click(function() {
			$(".popUpblack").remove();
		});
		jQuery(".popUpblack").click(function() {
			$(".popUpblack").remove();
		});
		return false;
	});
};

function setImgMax(img, imgW, imgH, tW, tH) {
	var tWidth = tW || w_width;
	var tHeight = tH || w_height;
	var coe = imgH / imgW;
	var coe2 = tHeight / tWidth;
	if (coe < coe2) {
		var imgWidth = tHeight / coe;
		img.css({
			height: tHeight,
			width: imgWidth,
			left: -(imgWidth - tWidth) / 2,
			top: 0
		});
	} else {
		var imgHeight = tWidth * coe;
		img.css({
			height: imgHeight,
			width: tWidth,
			left: 0,
			top: -(imgHeight - tHeight) / 2
		});
	};

};
