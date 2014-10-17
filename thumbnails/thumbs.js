$.Thumbs = function (el) {
  this.$el = $(el);
};

$.fn.thumbs = function () {
  return this.each(function () {
    new $.Thumbs(this);
  });
};
