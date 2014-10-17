$.Thumbs = function (el) {
  this.$el = $(el);
  this.$activeDiv = this.$el.find("div.active");
  this.$gutterImages = this.$el.find("div.gutter-images");
  this.$activeImg = this.$gutterImages.children().eq(0);

  this.activate(this.$activeImg);
  this.bindEvents();
};

$.Thumbs.prototype.bindEvents = function () {
  this.$gutterImages.on("click", "img", function (event) {
    this.$activeImg = $(event.currentTarget);
    this.activate(this.$activeImg);
  }.bind(this));

  this.$gutterImages.on("mouseenter", "img", function (event) {
    this.activate($(event.currentTarget));
  }.bind(this));

  this.$gutterImages.on("mouseleave", function () {
    this.activate(this.$activeImg);
  }.bind(this));
};

$.Thumbs.prototype.activate = function ($img) {
  this.$activeDiv.empty();
  this.$activeDiv.append($img.clone());
};

$.fn.thumbs = function () {
  return this.each(function () {
    new $.Thumbs(this);
  });
};
