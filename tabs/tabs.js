$.Tabs = function (el) {
  this.$el = $(el);
  this.$contentTabs = $(this.$el.data("content-tabs"));
  this.$activeTab = this.$contentTabs.find(".active");

  this.$el.on("click", "a", this.clickTab.bind(this));
};

$.Tabs.prototype.clickTab = function (event) {
  event.preventDefault();

  var $activatedA = $(event.currentTarget);
  $activatedA.closest("ul").find(".active").removeClass("active");
  $activatedA.addClass("active");

  this.$activeTab.removeClass("active");
  this.$activeTab = $($activatedA.attr("href")).addClass("active");
};

$.fn.tabs = function (el) {
  return this.each(function () {
    new $.Tabs(this);
  });
};
