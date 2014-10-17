$.Thumbs = function (el) {
  this.$el = $(el);
  this.$activeDiv = this.$el.find("div.active");

  this.gutterIdx = 0;
  this.$gutter = this.$el.find("div.gutter");
  this.$gutterImages = this.$gutter.find("div.gutter-images");
  this.$images = this.$gutterImages.children();
  this.fillGutterImages();

  this.$activeImg = this.$images.eq(0);
  this.activate(this.$activeImg);
  this.bindEvents();
};

$.Thumbs.prototype.fillGutterImages = function () {
  this.$gutterImages.empty();
  for (var i = 0; i < 5; i++) {
    this.$gutterImages.append(this.$images.eq(this.gutterIdx + i));
  }
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

  this.$gutter.on("click", "a.nav", function (event) {
    var $anchor = $(event.currentTarget);
    var idx = this.gutterIdx;
    if ($anchor.is(".nav.left")) {
      idx -= 1;
    } else if ($anchor.is(".nav.right")) {
      idx += 1;
    }

    this.gutterIdx = ((idx + this.$images.length) % this.$images.length);
    this.fillGutterImages();
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
