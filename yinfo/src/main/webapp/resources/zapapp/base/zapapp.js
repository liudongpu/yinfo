/**
 * 
 */

var zapapp = {
	d : function(data) {
		console.log(data);
	}
};

zapapp.config = {

};

zapapp.plug = {
	lazyload : function() {

		$("img.lazy").lazyload({
			//skip_invisible : false,
			threshold : 100,
			placeholder : ""
		});

	}

};

zapapp.page = {

	toMenu : function(sId) {

		zapapp.page.toPage(sId);

	},

	toPage : function(sId) {

		$.ajax({
			type : "GET",
			url : sId,
			dataType : "html",
			success : function(data) {

				$('#' + sId + ' .ui-content').html(data);

				$('#' + sId).trigger('create');

				// $.mobile.navigate( "#"+sId );
				console.log('change to');
				// $.mobile.changePage( "#"+sId );
				// $.mobile.navigate( "#"+sId );
				// $.mobile.refresh();
				zapapp.plug.lazyload();
			}
		});

		// $.mobile.changePage( "#"+sId );

	}

};
