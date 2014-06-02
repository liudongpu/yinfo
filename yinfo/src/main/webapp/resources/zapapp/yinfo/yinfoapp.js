/**
 * 
 */




var yinfoapp={
	
		init:function()
		{
			
			//zapapp.page.toPage('mobile_main');
			
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
















