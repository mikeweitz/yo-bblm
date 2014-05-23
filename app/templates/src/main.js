// (function(Backbone, _, $){


//
// Localize or create a new JavaScript Template object.
//
window.JST = window.JST || {};

var App = App || {}

log('namespace', App);

// Container object for data files and BB views
App.data = {}
App.views = {}


//
// ready event
//
$(function() {

	//
	// Configure LayoutManager
	//
	Backbone.Layout.configure({
		// Allow LayoutManager to augment Backbone.View.prototype.
		manage: true,

		// where are the HTML templates:
		prefix: "templates/",

		fetchTemplate: function(path) {
			log('fetch:', arguments);
			// Concatenate the file extension.
			path = path + ".html";

			// If cached, use the compiled template.
			if (JST[path]) {
				return JST[path];
			}

			// Put fetch into `async-mode`.
			var done = this.async();

			// Seek out the template asynchronously.
			jQuery.get(path, function(contents) {
				done(_.template(contents));
			}, "text");
		}
	});


	//
	// Start up script
	// If data is loaded, start up backbone
	// 
	App.init = function(){
		log('check if data is loaded');
		if (App.data.hasOwnProperty("home")) {
			Backbone.history.start();
			log('start history');
		} else {
			setTimeout( App.init, 100);
		}

	}


	//
	// Definte our router - pushstate disabled by default
	// If you want pushstate, you'll have to add your htaccess
	App.appRouter = new AppRouter(); // Router initialization 
	// var pushState = { 
	// 	pushState: true, 
	// 	root: "/showtime/homeland-aftermath/yo-h5bp/"
	// }


	//
	// PUSHSTATE - force links through the router
	//
	// $('body').on("click", "a[href^='/']", function(event) {
	//   if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
	//     event.preventDefault();
	//     var url = $(event.currentTarget).attr("href").replace(/^\//, "");
	//     appRouter.navigate(url, { trigger: true });
	//   }
	// });
 
	//
	// Load the data file
	//
	$.getJSON('assets/data/data.json', function(data) {
		log('Application data', data);
		$.extend(App.data, data);
		$('body').removeClass('loading');

		// Once data is loaded, run the init
		App.init();

	});

}); // end ready event


//
// Analytics
//
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-111111111-1']);
_gaq.push(['trackPageview']);

(function() {
  var ga = document.createElement('script'); 
  ga.type = 'text/javascript'; 
  ga.async = true;
  ga.file = (window.location.href.indexOf('localhost') > -1) ? 'u/ga_debug.js' : 'ga.js';
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/' + ga.file;
  var s = document.getElementsByTagName('script')[0]; 
  s.parentNode.insertBefore(ga, s);
})();

