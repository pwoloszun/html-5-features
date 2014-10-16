var ZombieView = (function() {

  var TEMPLATE = "<div class='zombie'></div>";

  function ZombieView(worker) {
    this.$el = $(TEMPLATE);
    var that = this;
    // TODO: moveTo() when worker sends message about zombie position change
  }

  ZombieView.prototype.moveTo = function(params) {
    this.$el.stop(true, false);
    // TODO: implement this.$el animation using jQuery animate() and received params
    console.log(params);
  };

  return ZombieView;
})();
