// 弹出层
;(function($) {
    $.fn.popup = function(options) {
        return this.each(function() {
            var defaults = {
                width:400,
                height:300,
                title:"提示",
                content:"<p>111</p><div>5555</div>" ,
                overlay:true,
                
            }
            var opts =$.extend({},defaults,options),

                html='<div class="popup_overlay"></div><div class="popup_container"><div class="popup_hd"><h2 class="popup_title">'+opts.title+'</h2><a href="javascript:;" class="popup_close">&times;</a></div><div class="popup_bd">'+opts.content+'</div></div>',

            _this=$(this),
            popup_container=$(".popup_container"),
            popup_title=$(".popup_title"),
            popup_bd=$(".popup_bd"),
            popup_close=$(".popup_close"),
            popup_overlay=popup_container.siblings(".popup_overlay");

            _this.on("click" ,function(){
                
                $("body").append(html);
                $(".popup_container").animate({
                    opacity:1
                });
                $(".popup_overlay").animate({
                    opacity:0.7
                });
            });

            $(document).on("click",".popup_close", function(){

                $(".popup_container").fadeOut();
                $(".popup_overlay").fadeOut();
                setTimeout(function(){
                    $(".popup_container").remove();
                    $(".popup_overlay").remove();
                },2000)
            })
        })
    }
})(jQuery)
