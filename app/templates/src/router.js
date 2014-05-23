;(function(App, Backbone, _, $){

	window.AppRouter = Backbone.Router.extend({

		routes: {
			'': 'index',
			'index.html': 'index',
			// 'the-experience': 'experience',
			// ':level': 'blockGrid', // Matches http://example.com/#six
			'!/(:section)(/:subsection)': 'getPage',
			':section(/:subsection)': 'reRoute',
			//,'*actions': 'notFound' // Matches http://example.com/#anything-here
		},

		initialize: function() {
			// this.listenTo( Backbone, 'page-transition', this.animate );

			var section = _.last( parent.location.hash.substr(1).split('/'));
			
			//force = (section == '') ? false : true;
			section = (section == '') ? 'home' : section;
			log('Router initialize - load at: ' + section);
		},


		// home : function() {
		// 	log('home')
		// },

		// defaultAction : function( action ) {
		// 	log('default', action)
		// },

		index: function(){
			log('index route');
			var args = {page: 'home'};
			this.getPage('home');
		},

		// Enforce use of hash-bang on routes
		reRoute: function(section, subsection){
			route = '#!/'+section;
			route += (subsection && typeof subsection !== 'undefined') ? '/'+subsection : '';
			window.location.hash = route;
		},


		getPage: function(section, subsection){
	 		log('get page', section);
	 		var section = (!section) ? 'home' : section,
	 			args = { page: section };

			if(subsection && typeof subsection !== 'undefined'){
				args.subsection = subsection;
			}

			// Update the body classs with a section indicator
			// page-[args.page]
			$('body').removeClass(function (index, css) {
				return (css.match (/\bpage-\S+/g) || []).join(' ');
			}).addClass('page-'+args.page);

			log('vent - load page: ', args);

			// remove the existing view
			if(App.views.hasOwnProperty('content')){
				App.views.content.destroy_view();
			};

			// load the new view
			switch (args.page) {
				case 'home':
				App.views.content = new App.HomeView({ page: args.page });
				break;

				// Example of a new valid route:
				// case 'about':
				// App.views.content = new App.AboutView({ page: args.page });
				// break;

				default:
				App.views.content = new App.ErrorView({ page: '404' });
				break;
			};
			//==========
			App.vent.trigger('loadPage', args)
		}

	});

})( App = window.App || {}, Backbone, _, jQuery);