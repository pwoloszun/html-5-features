$(function() {
  var fieldView = new FieldView();

  for (var i = 0; i < 10; i++) {
    var worker = new Worker("js/ZombieApp/ZombieWorker.js");
    worker.onerror = function(error) {
      console.error(error);
    };

    var zombieView = new ZombieView(worker);
    fieldView.addView(zombieView);
    fieldView.addWorker(worker);

    worker.postMessage({
      msg: "init",
      width: fieldView.width(),
      height: fieldView.height()
    });

  }

});
