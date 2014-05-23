;(function(App, Backbone, _, $){

	//
	// Event Aggregator
	//
	App.vent = _.extend({}, Backbone.Events)

	App.vent.on("loadPage", function( args ){
    	App.track.page({section: args.page, subsection: args.subsection});
    });

	log('event aggregator', App);

})( App = window.App || {}, Backbone, _, jQuery);