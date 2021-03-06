$(function() {
	$.fn.jfade = function(settings) {
   //download by http://www.codefans.net
	var defaults = {
		start_opacity: "1",
		high_opacity: "1",
		low_opacity: ".1",
		timing: "500",
		children:'img'
	};
	var settings = $.extend(defaults, settings);
	settings.element = $(this);
			
	//set opacity to start
	$(settings.element).css("opacity",settings.start_opacity);
	//mouse over
	$(settings.element).hover(
	
		//mouse in
		function () {												  
			$(this).find(settings.children).stop().animate({opacity: settings.high_opacity}, settings.timing); //100% opacity for hovered object
			$(this).siblings().find(settings.children).stop().animate({opacity: settings.low_opacity}, settings.timing); //dimmed opacity for other objects
		},
		
		//mouse out
		function () {
			$(this).find(settings.children).stop().animate({opacity: settings.start_opacity}, settings.timing); //return hovered object to start opacity
			$(this).siblings().find(settings.children).stop().animate({opacity: settings.start_opacity}, settings.timing); // return other objects to start opacity
		}
	);
	return this;
	}
	
});