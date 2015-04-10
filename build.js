var roo = require('roo');

roo(__dirname)
  .get('/', 'index.jade')
  .exec('duo home.js > js/build.js')
  .exec('myth home.css build/style.css')
  .static(__dirname)
  .listen(4000);