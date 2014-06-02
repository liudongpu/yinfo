/**
 * 
 */

var zapapp = {

};

/* 基础配置 */
zapapp.config = {

	// 自动页面名称
	autoPageName : 'mobile_auto_',

	pageCenterClass : '.zmb_page_center',

	// 默认情况下的css开始名称
	cssStart : '.zmb_',

	// 激活状态的css样式名称
	cssActive : 'c_active',

};

/* 临时变量存储 */
zapapp.temp = {
	// 自动页面当前编号
	autoPageIndex : 0,
	
	lastPageHash:''

};

/* 私有函数 该属性内所有函数禁止外调 */
zapapp.priv = {

		upAutoPageId : function(sUrl) {

			return '#' + zapapp.config.autoPageName + zapapp.temp.autoPageIndex;

		},
		
		upHashName:function()
		{
			var sHash = location.hash;

			// 默认如果取出的hash为空则设置为第一个hash
			if (sHash == "") {
				sHash = $(zapapp.config.cssStart + "layout_footer a")
						.first().attr('href');
			}
			
			return sHash;
		}
		
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

	slidePlay : function(sClassName) {
		var a = new Swiper('.' + sClassName + ' .swiper-container', {
			pagination : '.' + sClassName + ' .pagination',
			loop : true,
			autoplay : 5000,
			grabCursor : true,
			paginationClickable : true
		});
		// setTimeout(function(){a.swipeTo(0);},1000);

	}

};

/* 初始化相关 */
zapapp.init = {

	initDo : function() {
		zapapp.init.hashChange();
		zapapp.init.pageChange();

	},

	// 监听浏览历史的变更
	navigateChange : function() {
		// Respond to back/forward navigation
		$(window).on("navigate", function(event, data) {

			console.log("zapapp.init.navigateChange:", data.state.hash);

		});
	},

	// 创建页面
	createPage : function(sIds) {
		for ( var i in sIds) {
			zapapp.page.toPage(sIds[i]);
		}
	},

	hashChange : function() {

		$(window).on(
				"hashchange",
				function(event, data) {

					var sHash = zapapp.priv.upHashName();
					
					
					console.log("zapapp.init.hashchange:", sHash);

					
					//$(zapapp.temp.lastPageHash+' '+zapapp.config.pageCenterClass).hide();
					
					
					$(sHash+' '+zapapp.config.pageCenterClass).show();
					
					
					zapapp.temp.lastPageHash=sHash;
					
					
					
					
					$(
							zapapp.config.cssStart + "layout_footer a[href!='"
									+ sHash + "']").removeClass(
							zapapp.config.cssActive);
					
					$(
							zapapp.config.cssStart + "layout_footer a[href='"
									+ sHash + "']").addClass(
							zapapp.config.cssActive);

				});
	},

	// 页面变更事件的监听
	pageChange : function() {

		$(document).on("pagechange", function(event, data) {

			console.log("zapapp.init.pageChange:", data);

		});

	}

};



// 页面相关
zapapp.page = {

	toMenu : function(sId) {

		zapapp.page.toPage(sId);

	},

	hrefPage : function(sUrl) {

		console.log('zapapp.page.hrefPage:' + sUrl);
		
		//$(zapapp.priv.upHashName()+' '+zapapp.config.pageCenterClass).hide();
		
		//$.mobile.loading(); 
		
		
		$.mobile.loading('show');
		$(zapapp.priv.upHashName()+' '+zapapp.config.pageCenterClass).hide();
		
		
		$.ajax({
			type : "GET",
			url : sUrl,
			dataType : "html",
			success : function(data) {

				$(
						zapapp.priv.upAutoPageId(sUrl) + ' '
								+ zapapp.config.pageCenterClass).html(data);

				//$(zapapp.priv.upAutoPageId(sUrl)).trigger('create');
				//$.mobile.changePage(zapapp.priv.upAutoPageId(sUrl));
				//$(zapapp.priv.upAutoPageId(sUrl) + ' '+ zapapp.config.pageCenterClass).show();
				$.mobile.pageContainer.pagecontainer( "change", zapapp.priv.upAutoPageId(sUrl) );
				$(zapapp.priv.upAutoPageId(sUrl)).trigger('create');
				//zapapp.plug.lazyload();
			}
		});

	},

	// 转到页面
	toPage : function(sId) {

		$.ajax({
			type : "GET",
			url : sId,
			dataType : "html",
			success : function(data) {

				$('#' + sId + ' ' + zapapp.config.pageCenterClass).html(data);

				$('#' + sId).trigger('create');

				// $.mobile.navigate( "#"+sId );
				console.log('zapapp.page.toPage:', sId);
				// $.mobile.changePage( "#"+sId );
				// $.mobile.navigate( "#"+sId );
				// $.mobile.refresh();
				zapapp.plug.lazyload();
			}
		});

		// $.mobile.changePage( "#"+sId );

	}

};
