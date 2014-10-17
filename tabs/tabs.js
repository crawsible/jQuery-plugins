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

  this.animateContentTabSwitch($activatedA);
};

$.Tabs.prototype.animateContentTabSwitch = function ($activatedA) {
  this.$activeTab.removeClass("active").addClass("transitioning");
  this.$activeTab.one("transitionend", function () {
    this.$activeTab.removeClass("transitioning");

    // new $activeTab!!!
    this.$activeTab = $($activatedA.attr("href"));
    this.$activeTab.addClass("active transitioning");
    setTimeout(function () {
      this.$activeTab.removeClass("transitioning");
    }.bind(this), 0);
  }.bind(this));
};

$.fn.tabs = function (el) {
  return this.each(function () {
    new $.Tabs(this);
  });
};
