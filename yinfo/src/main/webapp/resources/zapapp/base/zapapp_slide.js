/**
 * 轮播图专用
 */

var zapapp_slide = {

	defs : {
		id : '.zmb_slide_img',
		maxSize : 10,
		autoPlay : 5000,
		nowIndex : 0
	},

	temp : {

		sets : {},

		timer : {}

	},

	slide : function(oSet) {

		var s = $.extend({}, zapapp_slide.defs, oSet || {});

		s.maxSize = $(s.id + ' ul li').size();

		// $(s.id+' ul').animate({left:'-100%'},"slow");
		zapapp_slide.temp.sets[s.id] = s;

		if (zapapp_slide.temp.timer[s.id]) {
			clearInterval(zapapp_slide.temp.timer[s.id]);
		}
		
		
		if($(s.id + ' .c_nav').length<=0)
			{
			
			
				var aSpan=[];
				for(var i=0;i<s.maxSize;i++ )
					{
						aSpan.push('<span class="c_switch '+(i==0?' c_active':'')+'"></span>');
					}
				
			
				$(s.id).append('<div class="c_nav">'+aSpan.join('')+'</div>');
			}
		

		zapapp_slide.temp.timer[s.id] = setInterval(function() {
			zapapp_slide.moveTo(s.id,'next');
		}, s.autoPlay);

	},

	
	
	moveTo:function(sId,sType)
	{
		var s = zapapp_slide.temp.sets[sId];
		console.log(s);
		
		
		s.nowIndex = parseInt(s.nowIndex) + 1;

		if (s.nowIndex >= s.maxSize) {
			s.nowIndex = 0;
		}
		
		$(sId+' .c_switch').removeClass('c_active');
		$(sId+' .c_switch').eq(s.nowIndex).addClass('c_active');

		var sMove = '-' + parseInt(parseInt(s.nowIndex) * 100) + '%';
		$(s.id + ' ul').animate({
			left : sMove
		});

		
	}
	
	

};
