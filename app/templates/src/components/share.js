;(function(App, Backbone, _, $){
	

	App.share = function(args){

		var params = {
				w: 450,
				h: 300,
				network: 'facebook',
				section: false,
				url: window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.hash.replace('#!/', '')
			},
			baseurl = 'http://qa2.history.com/shows/vikings/pages/bpg-interactive',
			tweetCopy = "Placeholder Tweet copy",
			endpoint = {
				facebook: "http://www.facebook.com/sharer.php?u=",
				twitter: "https://twitter.com/intent/tweet?text=[TEXT]&url=",
				gplus: "https://plus.google.com/share?url="
			};

		// finalize parameters with Top and Left values
		params.l = (screen.availWidth/2-225),
		params.t = (screen.availHeight/2-150);

		// Merge params with arguments
		$.extend(params, args);

		var href = (params.network == 'facebook') ? endpoint.facebook :
			(params.network == 'twitter') ? endpoint.twitter :
			(params.network == 'google' || params.network == 'gplus') ? endpoint.gplus :
			href_facebook;

		href = href.replace('[TEXT]', params.description);
		href += encodeURIComponent( params.url );
		log('share '+href);



		if (params.network == 'facebook') {
			FB.ui(
			  {
			    method: 'feed',
			    name: params.title,
			    link: params.url,
			    picture: params.picture,
			    caption: App.data.share.caption,
			    description: params.description
				  },
			  function(response) {
			  	log('RESPONSE::::: ', response);
			    if (response && response.post_id) {
			      log('Post was published.');
			    } else {
			      log('Post was not published.');
			    }
			  }
			);			

		} else {
			window.open(href, 'sharewin', 'width='+params.w+',height='+params.h+',left='+params.l+',top='+params.t+'');
		}

	};


	//
	// Add FB SDK
	//
	var appID = 'XXXX';
	if (window.location.href.indexOf('localhost') > -1){
		appID = 'XXXX';
	} else if (window.location.href.indexOf('dev.') > -1){
		appID = 'XXXX';
	} else {
		appID = 'XXXX';
	}


	window.fbAsyncInit = function() {
	  // init the FB JS SDK
	  FB.init({
	    appId      : appID,                        // App ID from the app dashboard
	    status     : true,                      // Check Facebook Login status
	    xfbml      : true                                  // Look for social plugins on the page
	  });

	  // Additional initialization code such as adding Event Listeners goes here
	};

	// Load the SDK asynchronously
	(function(){
	   // If we've already installed the SDK, we're done
	   if (document.getElementById('facebook-jssdk')) {return;}

	   // Get the first script element, which we'll use to find the parent node
	   var firstScriptElement = document.getElementsByTagName('script')[0];

	   // Create a new script element and set its id
	   var facebookJS = document.createElement('script'); 
	   facebookJS.id = 'facebook-jssdk';

	   // Set the new script's source to the source of the Facebook JS SDK
	   facebookJS.src = '//connect.facebook.net/en_US/all.js';

	   // Insert the Facebook JS SDK into the DOM
	   firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
	 }());


})( window.App = window.App || {}, Backbone, _, jQuery);