/**
 * 
 */

var zapapp = {

};

/* 基础配置 */
zapapp.config = {

	// 自动页面名称
	autoPageName : 'mobile_auto_',
	
	pageCenterClass:'.zmb_page_center'
};

/* 临时变量存储 */
zapapp.temp = {
	// 自动页面当前编号
	autoPageIndex : 0

};

/* 调用插件相关 */
zapapp.plug = {
	/* 延迟加载 */
	lazyload : function() {

		$("img.lazy").lazyload({
			// skip_invisible : false,
			threshold : 100,
			placeholder : ""
		});

	},
	
	slidePlay:function(sClassName)
	{
		var a=new Swiper('.'+sClassName+' .swiper-container',{
		    pagination: '.'+sClassName+' .pagination',
		    loop:true,
		    autoplay:5000,
		    grabCursor: true,
		    paginationClickable: true
		  });
		//setTimeout(function(){a.swipeTo(0);},1000);
		
	}
	

};

/* 初始化相关 */
zapapp.init = {
		
	initDo:function()
	{
		zapapp.init.pageChange();
		
	},
		

	// 监听浏览历史的变更
	navigateChange : function() {
		// Respond to back/forward navigation
		$(window).on("navigate", function(event, data) {
			
			console.log("zapapp.init.navigateChange:",data.state.hash);
			
			
		});
	},
	
	//创建页面
	createPage:function(sIds)
	{
		for(var i in sIds)
			{
			zapapp.page.toPage(sIds[i]);
			}
	},
	
	//页面变更事件的监听
	pageChange:function()
	{
		
		
		$(document).on("pagechange", function(event, data) {
			
			console.log("zapapp.init.pageChange:",data);
			
			
		});
		
	}
	
	
};



zapapp.priv=
	{
		
		upAutoPageId:function(sUrl)
		{
			
			return '#'+zapapp.config.autoPageName+zapapp.temp.autoPageIndex;
			
		}
	};


// 页面相关
zapapp.page = {

	toMenu : function(sId) {

		zapapp.page.toPage(sId);

	},

	hrefPage : function(sUrl) {

		console.log('hrefPage to:' + sUrl);
		
		
		
		$.ajax({
			type : "GET",
			url : sUrl,
			dataType : "html",
			success : function(data) {
				
				$(zapapp.priv.upAutoPageId(sUrl)+' '+ zapapp.config.pageCenterClass).html(data);

				
				$(zapapp.priv.upAutoPageId(sUrl)).trigger('create');
				$.mobile.changePage(zapapp.priv.upAutoPageId(sUrl));
				
				
				
				zapapp.plug.lazyload();
			}
		});
		
		

	},
	
	
	//转到页面
	toPage : function(sId) {

		$.ajax({
			type : "GET",
			url : sId,
			dataType : "html",
			success : function(data) {

				$('#' + sId +' '+ zapapp.config.pageCenterClass).html(data);

				$('#' + sId).trigger('create');

				// $.mobile.navigate( "#"+sId );
				console.log('zapapp.page.toPage:',sId);
				// $.mobile.changePage( "#"+sId );
				// $.mobile.navigate( "#"+sId );
				// $.mobile.refresh();
				zapapp.plug.lazyload();
			}
		});

		// $.mobile.changePage( "#"+sId );

	}

};
