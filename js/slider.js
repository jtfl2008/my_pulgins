// 轮播图
;(function($){
    $.fn.slider = function(options){
        return this.each(function(){
            var defaults={
                event:"mouseenter",
                autoplaySpeed:3000,
                speed:300,
            }
            var opts=$.extend({},defaults,options),
                _this=$(this),
                index=0,
                timer,
                slider_items=_this.find('.slider_items'),

                slider_item=slider_items.find('li'),
                len=slider_item.length,
                slider_item_w=slider_item.outerWidth();

                for(var i=1;i<=len;i++){
                    var li="<li>"+i+"</li>";
                    var navs= _this.find(".navs").append(li);
                }
                    console.log(navs);
                
                // _this.append(navs);
                _this.find('.navs li').eq(0).addClass('active');

                slider_items.css({
                    width:len*slider_item_w
                });
            function change(index){
                var curLeft = -index * slider_item_w;
                slider_items.stop().animate({
                    left:curLeft
                }, opts.speed);

                _this.find('.navs li').eq(index).addClass('active').siblings().removeClass('active');
            };

            _this.find('.prev').on("click",function(){
                index--;
                if( index ==-1){
                    index = len -1;
                }

                change(index);
            });
            _this.find('.next').on("click",function(){
                index++;
                if( index ==len){
                    index = 0;
                }

                change(index);
            });
            _this.on(opts.event,".navs li",function(){
                var _index = $(this).index();
                index = _index;
                change(index);
            })
            _this.hover(function() {
                clearInterval(timer);
            }, function() {
                timer = setInterval(function(){
                    index ++;
                    if(index == len){
                        index=0;
                    }
                    change(index);
                },opts.autoplaySpeed)
            }).trigger("mouseleave");
        })
    }
})(jQuery)