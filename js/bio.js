var $ = require('jquery/jquery@2.1.3:dist/jquery.js');
var template = require('./bio.html');
require('olsonpm/hoverintent-jqplugin@master:dist/hoverintent.js')($);

module.exports = Bio;

function Bio(){
  this.$el = $(template);
  this.$content = this.$el.find('.bio-content');
  this.bind();
}

Bio.prototype.bind = function(){
  var self = this;

  // on smaller devices, treat it as an accordion
  if ($(window).width() <= 595) {
    
    $('.popup').on('click', function(e){
      e.preventDefault();
      var $el = $(e.currentTarget).closest('.person');
      $el.toggleClass('showing');
    });

    return;
  }

  // otherwise, use hover effects
  $('.popup').on('click', function(e){
    e.preventDefault();
  });

  $('.popup').hoverintent(
    function(e){
      var $el = $(e.srcElement);
      var content = $el.next().html();
      self.show($el, content);
      if (self.timeout) {
        clearTimeout(self.timeout);
      }
    },

    function(e){
      if (self.cancel) {
        return;
      }
      if (self.timeout) clearTimeout(self.timeout);
      self.timeout = setTimeout(function(){
        self.hide();
      }, 200);
    }

  );

  this.$el.mouseenter(function(e){
    self.cancel = true;
    if (self.timeout) {
      clearTimeout(self.timeout);
    }
  });

  this.$el.mouseleave(function(e){
    self.cancel = false;
    self.hide();
  });


  function reposition(){
    if (self.showing && self.$current) {
      self.show(self.$current.el, self.$current.content);
    }
  }

  $(window).on('scroll', reposition);
  $(window).on('resize', reposition);
};

Bio.prototype.show = function(el, content){
  if (!this.showing) {
    this.showing = true;
    this.$el.addClass('showing');
  }

  this.$current = {
    el: el,
    content: content
  };

  var windowWidth = $(window).width();
  var pos = el[0].getBoundingClientRect();

  var top = ((pos.top - 120) < 0) ? 10 : pos.top - 120;

  this.$el.css({
    left: pos.right,
    top: top
  });

  this.$content.html(content);
};


Bio.prototype.hide = function(){
  this.$el.removeClass('showing');
  this.showing = false;
  this.$current = null;
}