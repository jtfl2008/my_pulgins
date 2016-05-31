// 轮播图
;(function($) {
    $.fn.slider = function(options) {
        return this.each(function() {
            var defaults = {
                event: "mouseenter",
                autoplay:true,
                autoplaySpeed: 3000,
                speed: 300,
                arrows: true,
                nav: true,
                fade: false
            }
            var opts = $.extend({}, defaults, options),
                _this = $(this),
                index = 0,
                timer,
                slider_items = _this.find('.slider_items'),

                slider_item = slider_items.find('li'),

                len = slider_item.length,
                slider_item_w = slider_item.outerWidth() || $(window).width();
                slider_item_h = slider_item.outerHeight() || $(window).height();
            _this.css({
                width: slider_item_w,
                height: slider_item_h
            });
            if (opts.nav) {
                _this.append('<ul class="navs"></ul>');
            }
            if (opts.arrows) {
                _this.append('<div class="prev btn">&lt;</div><div class="next btn">&gt;</div>');
            }
            for (var i = 1; i <= len; i++) {
                var li = "<li>" + i + "</li>";
                var navs = _this.find(".navs").append(li);
            }
            var navs_li=_this.find(".navs li");
            navs_li.eq(0).addClass("active");

            slider_items.css({
                width: len * slider_item_w
            });

            // fade
            if (opts.fade) {
                function change_fade(index) {
                    slider_item.eq(index).stop(true,true).fadeIn(opts.speed).siblings().fadeOut(opts.speed);
                    change_nav(index);
                };

            } else {
            // slider
                function change_slider(index) {
                    var curLeft = -index * slider_item_w;
                    slider_items.stop(true,true).animate({
                        left: curLeft
                    }, opts.speed);

                    change_nav(index);

                    _this.addClass('active').siblings().removeClass('active');
                };
                
            }
            _this.find('.prev').on("click", function() {
                index--;
                if (index == -1) {
                    index = len - 1;
                }

                change_slider(index);
            });
            _this.find('.next').on("click", function() {
                index++;
                if (index == len) {
                    index = 0;
                }

                change_slider(index);
            });
            // 导航
            function  change_nav(index){
                navs_li.eq(index).addClass('active').siblings().removeClass('active');
            }
            _this.on(opts.event, ".navs li", function() {
                var _index = $(this).index();
                index = _index;
                opts.fade ? change_fade(index) : change_slider(index);

            });
            // 触发事件
            if( opts.autoplay){
                _this.hover(function() {
                clearInterval(timer);
                }, function() {
                timer = setInterval(function() {
                    index++;
                    if (index == len) {
                        index = 0;
                    }
                   opts.fade ? change_fade(index) : change_slider(index)
                }, opts.autoplaySpeed)
            }).trigger("mouseleave");

            }
            
        })
    }
})(jQuery)
