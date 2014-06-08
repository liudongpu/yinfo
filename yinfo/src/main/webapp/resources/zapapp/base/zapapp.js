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

	// 本地存储的过期时间
	storageExpire : 'storage_expire_time',

	// 激活状态的css样式名称
	cssActive : 'c_active',
	
	//是否本地缓存 默认为true
	flagCache:false

};

/* 临时变量存储 */
zapapp.temp = {
	// 自动页面当前编号
	autoPageIndex : 0,

	lastPageHash : '',

	// 标记现在是否正显示加载中
	flagNowLoading : false

};

/* 存储相关 */
zapapp.storage = {

	save : function(sKey, oVal) {

		localStorage.setItem(sKey, JSON.stringify(oVal));
	},
	read : function(sKey) {
		return JSON.parse(localStorage.getItem(sKey));
	},
	// 判断是否存在
	exist : function(sKey) {

		return localStorage.getItem(sKey) != null;
	}

};

/* 私有函数 该属性内所有函数禁止外调 */
zapapp.priv = {

	upAutoPageId : function(sUrl) {

		return '#' + zapapp.config.autoPageName + zapapp.temp.autoPageIndex;

	},

	upHashName : function() {
		var sHash = location.hash;

		// 默认如果取出的hash为空则设置为第一个hash
		if (sHash == "") {
			/*
			 * sHash = $(zapapp.config.cssStart + "layout_footer
			 * a").first().attr( 'href');
			 */
			console.log("zapapp.priv.upHashName: hash empty");
			sHash = "#mobile_main";
		}

		return sHash;
	},

	// 获取缓存的html内容
	upCacheHtml : function(sUrl, fCallBack) {

		var sKey = "cachehtml:" + sUrl;

		if (zapapp.config.flagCache&&   zapapp.storage.exist(sKey)) {
			var sHtml = zapapp.storage.read(sKey)["data"];

			fCallBack(sHtml);
		} else {

			$.ajax({
				type : "GET",
				url : sUrl,
				dataType : "html",
				success : function(data) {

					var oStorage = {
						data : data
					};

					zapapp.storage.save(sKey, oStorage);

					fCallBack(data);

				}
			});

		}

	}

	,

	showLoading : function() {

		// $('.zmb_layout_loading').height($(document).height());
		$(zapapp.config.cssStart + 'layout_loading').show();

		if (!zapapp.temp.flagNowLoading) {
			zapapp.temp.flagNowLoading=true;
			setTimeout(function() {
				zapapp.priv.cloaseLoading();
			}, 1000);
		}
	},

	cloaseLoading : function() {
		
		$(zapapp.config.cssStart + 'layout_loading').hide();
		
		$(zapapp.config.cssStart + 'layout_loading').height($(document).height());
		
		zapapp.temp.flagNowLoading=false;
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

					// $(zapapp.temp.lastPageHash+'
					// '+zapapp.config.pageCenterClass).hide();

					$(sHash + ' ' + zapapp.config.pageCenterClass).show();

					

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

		$(document).on("pagebeforechange", function(event, data) {
			zapapp.priv.showLoading();
			console.log("zapapp.init.pageChange:", data);

		});

	}

};

// 页面相关
zapapp.page = {

	toMenu : function(sId) {
		//zapapp.priv.showLoading();

		
		
		//setTimeout(function(){
		
		var sPage = sId;

		
		//$('#' + (zapapp.temp.lastPageHash==""?"mobile_main":zapapp.temp.lastPageHash) ).css('height','0px');
		//$('#' + (zapapp.temp.lastPageHash==""?"mobile_main":zapapp.temp.lastPageHash) ).hide();
		
		console.log(zapapp.temp.lastPageHash);
		
		//$('#' + sPage).show();
		
		//$('#' + sPage).css('height','auto');
		
		//zapapp.temp.lastPageHash = sPage;
		
		
		//},1000)
		
		$.mobile.pageContainer.pagecontainer("change",
				 '#'+sPage);
		
		//setTimeout(function(){zapapp.page.toPage(sId)},500);
		/*
		setTimeout(function(){$.mobile.pageContainer.pagecontainer("change",
				 '#'+sPage);},100);
		*/
		
		
		
		/*
		 * if(zapapp.temp.lastPageHash) { $('#'+zapapp.temp.lastPageHash + ' ' +
		 * zapapp.config.pageCenterClass).html('');
		 * $('#'+zapapp.temp.lastPageHash).hide(); } zapapp.temp.lastPageHash =
		 * sId;
		 * 
		 * 
		 * zapapp.page.toPage(sId);
		 */

		// $('#' + sId + ' ' + zapapp.config.pageCenterClass).show();
		// setTimeout(function(){$.mobile.pageContainer.pagecontainer("change",
		// '#'+sId);},100);
		// $.mobile.pageContainer.pagecontainer("change", '#'+sId);
		// zapapp.page.hrefPage(sId);
	},

	hrefPage : function(sUrl) {

		console.log('zapapp.page.hrefPage:' + sUrl);

		// $(zapapp.priv.upHashName()+' '+zapapp.config.pageCenterClass).hide();

		// $.mobile.loading();

		// $.mobile.loading('show');

		// $(zapapp.priv.upHashName() + ' ' +
		// zapapp.config.pageCenterClass).html('');

		/*
		 * $(zapapp.priv.upHashName() + ' ' + zapapp.config.pageCenterClass)
		 * .hide();
		 */

		var sPage = zapapp.priv.upAutoPageId(sUrl);

		//zapapp.priv.showLoading();

		zapapp.priv.upCacheHtml(sUrl, function(data) {

			$(sPage + ' ' + zapapp.config.pageCenterClass).html(data);

			$.mobile.pageContainer.pagecontainer("change", sPage);

			$(sPage).trigger('create');
			// zapapp.plug.lazyload();

		});

	},

	// 转到页面
	toPage : function(sId) {

		zapapp.priv.upCacheHtml(sId, function(data) {

			//$.mobile.pageContainer.pagecontainer("change", '#'+sId);
			
			$('#' + sId + ' ' + zapapp.config.pageCenterClass).html(data);

			$('#' + sId).trigger('create');

			
			
			console.log('zapapp.page.toPage:', sId);

			// zapapp.plug.lazyload();

		});

	}

};
