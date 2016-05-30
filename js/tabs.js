// tab
;(function($) {
    $.fn.tabs = function(options) {
        return this.each(function(){
            var defaults = {
                event: "mouseenter",
                timeout: 300
            };
            var opts = $.extend({}, defaults, options),
            _this = $(this),
            tab_meun = _this.find(".tab_meun"),
            tab_con = _this.find(".tab_con");

            function tab(elem) {
                elem.addClass("current").siblings().removeClass("current");
                tab_con.eq(elem.index()).show().siblings().hide();
            }

            function delay(elem, time) {
                time ? setTimeout(function() { tab(elem) }, time) : tab(elem);
            }
            tab_meun.on(opts.event, function() {
                delay($(this), opts.timeout);

            })
        })
    }
})(jQuery)


