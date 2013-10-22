(function($) {

	$.fn.srnprtip = function(options) {
		var defaults = {
			target : '',
			timer : 10,
			show : false
		};
		var s = $.extend({}, defaults, options || {});

		if (s.show) {
			$(s.target).show();
			return;
		}

		var oTimer = null;
		$(this).hover(function() {

			$(s.target).slideDown(400);
			clearTimeout(oTimer);
			oFunc.flag = false;
		}, function() {
			oFunc.flag = true;
			oFunc.close();
		});

		$(s.target).hover(function() {
			clearTimeout(oTimer);
			oFunc.flag = false;
		}, function() {
			oFunc.flag = true;
			oFunc.close();
		});

		var oFunc = {
			flag : false,
			close : function() {

				oTimer = setTimeout(function() {
					oFunc.hide()
				}, s.timer);
			},
			hide : function() {

				// $(s.target).hide();
				$(s.target).slideUp(400);

			}
		};

	}
})(jQuery);






(function($) {

	$.fn.srnprscroll = function(options) {
		var defaults = {
			target : '',
			step : 100,
			show : false
		};
		var s = $.extend({}, defaults, options || {});
		var iNowIndex=0;
		var iEveryMove=4;
		var iMaxSize=$(this).find('img').size()-iEveryMove;
		var othis=$(this);
		
		$(this).find('.c_scroll').width(($(this).find('img').size())*s.step+'px');
		
		$(this).find('img').click(
				function()
		{
			$(s.target).attr('src',$(this).attr('src'));
		}
		);
		$(s.target).attr('src',$(this).find('img').eq(0).attr('src'));
		
		$(this).find('.c_prev').click(
				function()
				{
					if(iNowIndex>0)
						{
						
						iNowIndex=Math.max( iNowIndex-iEveryMove,0);
						$(this).parent().find('.c_scroll').animate({left:'-'+(iNowIndex*s.step)+'px'});
						}
				}
		);
		
		$(this).find('.c_next').click(
				function()
				{
					if(iNowIndex<iMaxSize)
						{
						
							iNowIndex=Math.min( iNowIndex+iEveryMove,iMaxSize-1);
							
							$(this).parent().find('.c_scroll').animate({left:'-'+(iNowIndex*s.step)+'px'});
							
						}
				}
		);
		
		

	}
})(jQuery);





(function ($) {
    "use strict";
    $.fn.pin = function (options) {
        var scrollY = 0, elements = [], disabled = false, $window = $(window);

        options = options || {};

        var recalculateLimits = function () {
            for (var i=0, len=elements.length; i<len; i++) {
                var $this = elements[i];

                if (options.minWidth && $window.width() <= options.minWidth) {
                    if ($this.parent().is(".pin-wrapper")) { $this.unwrap(); }
                    $this.css({width: "", left: "", top: "", position: ""});
                    if (options.activeClass) { $this.removeClass(options.activeClass); }
                    disabled = true;
                    continue;
                } else {
                    disabled = false;
                }

                var $container = options.containerSelector ? $this.closest(options.containerSelector) : $(document.body);
                var offset = $this.offset();
                var containerOffset = $container.offset();
                var parentOffset = $this.offsetParent().offset();

                if (!$this.parent().is(".pin-wrapper")) {
                    $this.wrap("<div class='pin-wrapper'>");
                }

                $this.data("pin", {
                    from: options.containerSelector ? containerOffset.top : offset.top,
                    to: containerOffset.top + $container.height() - $this.outerHeight(),
                    end: containerOffset.top + $container.height(),
                    parentTop: parentOffset.top
                });

                $this.css({width: $this.outerWidth()});
                $this.parent().css("height", $this.outerHeight());
            }
        };

        var onScroll = function () {
            if (disabled) { return; }

            scrollY = $window.scrollTop();
   
            for (var i=0, len=elements.length; i<len; i++) {          
                var $this = $(elements[i]),
                    data  = $this.data("pin"),
                    from  = data.from,
                    to    = data.to;
              
                if (from + $this.outerHeight() > data.end) {
                    $this.css('position', '');
                    continue;
                }
              
                if (from < scrollY && to > scrollY) {
                    !($this.css("position") == "fixed") && $this.css({
                        left: $this.offset().left,
                        top: 0
                    }).css("position", "fixed");
                    if (options.activeClass) { $this.addClass(options.activeClass); }
                } else if (scrollY >= to) {
                    $this.css({
                        left: "auto",
                        top: to - data.parentTop
                    }).css("position", "absolute");
                    if (options.activeClass) { $this.addClass(options.activeClass); }
                } else {
                    $this.css({position: "", top: "", left: ""});
                    if (options.activeClass) { $this.removeClass(options.activeClass); }
                }
          }
        };

        var update = function () { recalculateLimits(); onScroll(); };

        this.each(function () {
            var $this = $(this), 
                data  = $(this).data('pin') || {};

            if (data && data.update) { return; }
            elements.push($this);
            $("img", this).one("load", recalculateLimits);
            data.update = update;
            $(this).data('pin', data);
        });

        $window.scroll(onScroll);
        $window.resize(function () { recalculateLimits(); });
        recalculateLimits();

        $window.load(update);

        return this;
      };
})(jQuery);













