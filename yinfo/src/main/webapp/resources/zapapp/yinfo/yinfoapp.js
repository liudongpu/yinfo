/**
 * 
 */




var yinfoapp={
	
		init:function()
		{
			
			
			$.mobile.defaultPageTransition='none';
			//$.mobile.hashListeningEnabled=false;
			//zapapp.page.toPage('mobile_main');
			
			//$.mobile.pushStateEnabled=false;
			
			//$.mobile.hashListeningEnabled=false;
			
			zapapp.init.initDo();
			
			
			zapapp.init.createPage(['mobile_main','mobile_list','mobile_search','mobile_user']);
			
			//zapapp.page.toPage('mobile_list');
			
			/*
			$( document ).on( "pageshow",  function() {
			    var thePage = $( this ),
			        title = thePage.jqmData( "title" ),
			        next = thePage.jqmData( "next" ),
			        prev = thePage.jqmData( "prev" );
			    console.log(thePage);
			});
			*/
			
		}
		
		
		
		
};


$(document).ready(
function(){
	
	zapapp.init.navigateChange();
	yinfoapp.init();}	
);
















