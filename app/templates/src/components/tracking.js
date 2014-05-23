;(function(App, Backbone, _, $){

	//Namespace alieased to 'App'

	//
	// Tracking  Class
	//
	App.track = (function(){

		var platform = App.device;

		var page = function( args ){

			log('tracking function called - exit before executing');
			return false;
			
			log('track page load', args);

			// set up tracking params for GA / Omni
			var href = '/' + platform + '/' + args.section;
				href += (args.subsection) ? '/' + args.subsection : '';


			// prepend 'device' ahead of section
			var pageID = platform + ':' + args.section;
				pageID += (args.subsection) ? ':' + args.subsection : '';

			log('GA track page: '+href)

			// track: function( category, action, label, value ) {
			try {
				// Google Analytics
				window._gaq && window._gaq.push(['_trackPageview', href]);

			} catch ( e ) {
				log( 'Tracking error:', e );
			}
			return 'track page load';
		// }
		}

		var customEvent = function( category, action, label, value ) {

			try {
				// Google Analytics
				window._gaq && window._gaq.push( [ '_trackEvent', category, action, label, value ] );

			} catch ( e ) {
				log( 'Tracking error:', e );
			}
			return 'track custome event';
		// }

		} 
		var link = function( category, action, label, value ) {
			try {
				// Google Analytics
				window._gaq && window._gaq.push( [ '_trackEvent', category, action, label, value ] );

			} catch ( e ) {
				log( 'Tracking error:', e );
			}
			return 'track link';

		}

		var share = function( args ) {
			var category = 'Social',
				category_platform = category +'-'+ platform,
				action = 'Share',
				label = args.network,
				value = args.section.join('/'),
				pageID = category +'-'+ platform + ':' + action + ':' + label + ':' + args.section.join(':');

			log('omn track share: '+pageID)
			log('ga track share: '+category_platform+', '+ action +', '+label+', '+value);

			// track: function( category, action, label, value ) {
			try {
				// Google Analytics
				window._gaq && window._gaq.push( [ '_trackEvent', category_platform, action, label, value ] );

			} catch ( e ) {
				log( 'Tracking error:', e );
			}
			return 'track link';
		}

		return {
			page: page,
			customEvent: customEvent,
			share: share,
			link: link
		}

	})();
	// End Tracking Class


})( App = window.App || {}, Backbone, _, jQuery);
