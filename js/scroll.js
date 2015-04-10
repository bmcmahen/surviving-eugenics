var scrollTo = require('component/scroll-to');
var $ = require('jquery/jquery@2.1.3:dist/jquery.js');

var opts = {
  ease: 'in-out-sine',
  duration: 1000
};

module.exports = function(){

  function onClick(e){
    e.preventDefault();
    var href = e.currentTarget.href;
    var parts = href.split('#');
    var hash = parts[parts.length - 1];
    var target = $('#' + hash);
    if (target[0]) {
      scrollToTarget(target[0]);
    }
  }

  $('a[data-scroll]').on('click', onClick);
  $('.to-top').on('click', function(){
    scrollTo(0, 0, opts);
  });

};

function scrollToTarget(target){

  var top = $(target).offset().top;

  scrollTo(0, top, opts);

}