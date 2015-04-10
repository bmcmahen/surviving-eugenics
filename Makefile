dev:
	roo build.js

build:
	myth home.css build/style.css
	duo home.js > js/build.js
	jade index.js
