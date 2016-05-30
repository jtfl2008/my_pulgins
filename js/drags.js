// 拖拽


;(function($){
    $.fn.drag=function(options){
        return this.each(function(){
            var defaults={

            };
            var opts= $.extend({},defaults,options),
                _this=$(this),
                disX=0,
                disY=0;
            _this.on("mousedown",function(ev){
                disX= ev.pageX - _this.offset().left;
                disY= ev.pageY - _this.offset().top;
                $(document).on("mousemove",function(ev){
                    var left= ev.pageX-disX,
                        top =ev.pageY-disY;
                    _this.css({
                        left:left,
                        top: top
                    })
                });
                $(document).on("mouseup",function(){
                    $(this).off();
                })

                return false;

            })

        })
    }
})(jQuery)


