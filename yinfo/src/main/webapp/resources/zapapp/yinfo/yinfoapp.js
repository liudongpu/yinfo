/**
 * 
 */




var yinfoapp={
	
		init:function()
		{
			
			zapapp.page.toPage('mobile_main');
			
			
		}
		
		
		
		
};


$(document).ready(
function(){yinfoapp.init()}	
);

//Respond to back/forward navigation
$( window ).on( "navigate", function( event, data ){
	if ( data.state.foo ) {
		// Make use of the arbitrary data stored
	}

	if ( data.state.direction == "back" ) {
		// Make use of the directional information
	}

	// reset the content based on the url
	
	console.log(data.state);
	//alterContent( data.state.url );
});














