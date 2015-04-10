.PHONY: build

dev:
	roo build.js

build:
	myth home.css build/style.css
	duo home.js > build/home.js
	jade index.jade --obj '{production: true}'
	minify build/home.js build/home.min.js
	minify build/style.css build/style.min.css
