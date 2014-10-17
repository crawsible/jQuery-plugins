$.Carousel = function (el) {
  this.$el = $(el);
  this.activeIdx = 0;
  this.imgAtActiveIdx().addClass("active");
  this.bindEvents();
};

$.Carousel.prototype.bindEvents = function () {
  this.$el.find(".slide").on("click", function (event) {
    if (this.$el.find(".slide-left").is(event.target)) {
      this.slide(-1);
    } else if (this.$el.find(".slide-right").is(event.target)) {
      this.slide(1);
    }
  }.bind(this));
};

$.Carousel.prototype.imgAtIndex = function (idx) {
  return this.$el.find(".items *").eq(idx);
};

$.Carousel.prototype.imgAtActiveIdx = function () {
  return this.imgAtIndex(this.activeIdx);
};

$.Carousel.prototype.imgCount = function () {
  return this.$el.find(".items *").length;
};

$.Carousel.prototype.slide = function (dir) {
  if (this.transitioning) {
    return false;
  }
  this.transitioning = true;

  this.animateSlideOutWithDir(dir);
  this.activeIdx += dir;
  this.activeIdx = (this.activeIdx + this.imgCount()) % this.imgCount();
  this.animateSlideInWithDir(dir);
};

$.Carousel.prototype.animateSlideInWithDir = function (dir) {
  var dirClass = (dir < 0 ? "left" : "right");
  var $img = this.imgAtActiveIdx()
  $img.addClass("active " + dirClass);
  setTimeout(function () {
    $img.removeClass(dirClass);
  }, 20);
};

$.Carousel.prototype.animateSlideOutWithDir = function (dir) {
  var dirClass = (dir < 0 ? "right" : "left");
  var $img = this.imgAtActiveIdx();
  $img.addClass(dirClass);
  $img.one("transitionend", function () {
    $img.removeClass("active " + dirClass);
    this.transitioning = false;
  }.bind(this));
};

$.fn.carousel = function () {
  return this.each(function () {
    new $.Carousel(this);
  });
};
