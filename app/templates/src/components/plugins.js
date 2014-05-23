;(function(App, Backbone, _, $){

    //
    // 
    //


    // Avoid `console` errors in browsers that lack a console.
    (function() {
        var method;
        var noop = function noop() {};
        var methods = [
            'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
            'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
            'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
            'timeStamp', 'trace', 'warn'
        ];
        var length = methods.length;
        var console = (window.console = window.console || {});

        while (length--) {
            method = methods[length];

            // Only stub undefined methods.
            if (!console[method]) {
                console[method] = noop;
            }
        }

    }());
    
    window.log = function( msg, obj, stack ){
        var stack = stack || false;
        if(typeof window.console != 'undefined' && typeof window.console.log != 'undefined') {
            if (typeof obj !== 'undefined'){
                console.log("LOG :: "+msg, obj, stack);
            } else {
                console.log("LOG :: ", msg);            
            }
        }
    };

    // Log only on localhost, dev, and stage subdomains
    var href = window.location.href;
    window.log = ( href.indexOf('localhost') > -1 || href.indexOf('dev.') > -1 || href.indexOf('stage.') > -1 ) ?  window.log : function(){} ;


    //
    // Cookie API
    //
    App.setCookie = function( c_name, value, exdays ) {
        // Set exdays to null or 0 to set a session-only cookie
        // defaults to 0 (session)

        var exdays = exdays || 0,
            exdate = new Date();
        exdate.setTime( exdate.getTime() );

      var mid = new Date(),
        ts = mid.getTime();
      mid.setHours(24, 0, 0, 0);

        expires = exdays * 1000 * 60 * 60 * 24;
        exdate = new Date( mid.getTime() + (expires) );
        var c_value = escape(value) + ((exdays == 0 || exdays == null) ? "" : "; expires="+exdate.toUTCString());

        document.cookie = c_name + "=" + c_value;
        /*
        if ( window.location.href.indexOf('localhost') > -1 ) {
            document.cookie += ";domain=usanetwork.com";
        }
        */

        log('set cookie name:'+c_name+' | value:'+value);

    }

    App.getCookie = function( c_name ) {

        var i,
            x,
            y,
            ARRcookies=document.cookie.split(";");

        for (i=0;i<ARRcookies.length;i++) {
            x = ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
            x = x.replace(/^\s+|\s+$/g,"");
            if (x == c_name){
                    var pageInfo = y.split("**");
                return unescape(y);
            } else {
                // return false;
            }
        }

    }

    //
    // Image Preloader
    // Load the heavy background assets before revealing the content 
    //
    App.preload = function(arr){
        var newimages=[], 
            loadedimages=0,
            postaction = function(){},
            arr = (typeof arr != "object") ? [arr] : arr;

        function imageloadpost(){
            loadedimages++
            if (loadedimages==arr.length){
                postaction(newimages) //call postaction and pass in newimages array as parameter
            }
        }

        for (var i=0; i<arr.length; i++){
            newimages[i]=new Image()
            newimages[i].src=arr[i]
            newimages[i].onload=function(){
                imageloadpost()
            }
            newimages[i].onerror=function(){
                imageloadpost()
            }
        }
        return { //return blank object with done() method
            done:function(f){
                postaction=f || postaction //remember user defined callback functions to be called when images load
            }
        }
    }



})( App = window.App || {}, Backbone, _, jQuery)


