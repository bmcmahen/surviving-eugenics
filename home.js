var skrollr = require('prinzhorn/skrollr@0.6.29:dist/skrollr.min.js')


 _skrollr = skrollr.init({
    forceHeight: false,
    mobileCheck: function () {  
      return false  
    }  
  });

var trailer = require('./js/trailer');
var Bio = require('./js/bio');

// enable trailer
trailer();

// enable bio hover
var bio = new Bio();
document.body.appendChild(bio.$el[0]);



var scroll = require('./js/scroll');

scroll();