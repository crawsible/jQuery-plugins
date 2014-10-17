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
  this.imgAtActiveIdx().removeClass("active");
  this.activeIdx += dir;
  this.activeIdx = (this.activeIdx + this.imgCount()) % this.imgCount();
  this.imgAtActiveIdx().addClass("active");
};

$.fn.carousel = function () {
  return this.each(function () {
    new $.Carousel(this);
  });
};
