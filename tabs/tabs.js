$.Tabs = function (el) {

};

$.fn.tabs = function (el) {
  return this.each(function () {
    new $.Tabs(this);
  });
};
