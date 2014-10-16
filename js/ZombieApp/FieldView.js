var FieldView = (function() {

  function FieldView() {
    this.$el = $(".field");
    var offset = this.$el.offset();
    this.workers = [];
    var that = this;
    this.$el.on("click", function(event) {
      // TODO: each worker shoud receive message about clicked destination:
//      {
//        x: event.clientX - offset.left,
//        y: event.clientY - offset.top
//      }
    });
  }

  FieldView.prototype.addView = function(view) {
    this.$el.append(view.$el);
  };

  FieldView.prototype.addWorker = function(worker) {
    this.workers.push(worker);
  };

  FieldView.prototype.width = function() {
    return this.$el.width();
  };

  FieldView.prototype.height = function() {
    return this.$el.height();
  };

  return FieldView;
})();
