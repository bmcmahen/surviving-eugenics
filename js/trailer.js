var $ = require('jquery/jquery@2.1.3:dist/jquery.js');
var template = require('./trailer.html');

function generateIframe(){
  var w = $(window).width();
  var playDimensions = {
    width: w - 10,
    height: w / 2
  };
  return '<iframe src="https://player.vimeo.com/video/121308653?autoplay=1" width="'+ playDimensions.width +'" height="'+ playDimensions.height +'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
}

function Trailer(){
  this.$el = $(template);
  this.$el.find('button.close').on('click', this.close.bind(this));
  this.$main = this.$el.find('.main');
}

Trailer.prototype.show = function(){
  this.$main.html(generateIframe());
  this.$el.addClass('show');
}

Trailer.prototype.close = function(e){
  e.preventDefault();
  this.$main.empty();
  this.$el.removeClass('show');
}


module.exports = function(){
  var trailer = new Trailer();
  $('body').append(trailer.$el);

  function showTrailer(e){
    e.preventDefault();
    console.log('show trailer');
    trailer.show();
  }

  $('#trailer').on('click', showTrailer);

};
