# BBLM Starter


## Tool Kit
- jQuery
- Underscore
- Backbone
- Backbone.LayoutManager
- Grunt
- Node
- Bower
- Sass

## Summary
A Backbone Layoutmanager starter template
External Underscore templates
Grunt build system
You can swap it our for Gulp if you're cool
There are some wrapper scripts for Logging, Sharing, and GA Tracking


## TO DO
Clean up the router - there's some legacy junk in there.

Call views with the Router, not the Event bus 
Right now, I wrote the interior pages into a "loadPage" event in the event bus.
That's probably pretty stupid. I mean, who would think to look there when adding new pages?

There's more, but I don't want to think about it now...


## Structure
.jshintrc
.bowerrc
Gruntfile.js
package.json
app/
	assets/
		data/
		images/
		styles/
		scripts/
	includes/
	index.php
	src/
		components/
			plugins.js
			share.js
			tracking.js
		views/
		main.js
		router.js
		vent.js

dist/ 


## Install
Clone the repo

1) install the node dependancies (you know you wanna)
`npm install`

2) Install the bower components
`bower install`

if you get a perms error, you can run bower as root:
`sudo bower --allow-root install`


## Grunt tasks:
Build for production  
`grunt`

Build for stage (concat, but not compiled for easier debug)  
`grunt stage`


just compile styles in /app folder (doesn't copy to dist)  
`grunt css` -or- `grunt sass`


## Recent Issues
NPM - package name invalid - udpated and npm install works
Bower - on my system only works as root (sudo - see above)
Grunt - Found a grunt task with a bad path for bower_components

