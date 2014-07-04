/*
  Zaimplementuj apke, ktora stworzy kilka MyWorkery.
  - Kazdy worker ma pracowac losowa ilosc sekund
  - co sekunde worker ma publikowac event "message" do skryptu glownego ze swoim id
  - na koniec swojej pracy worker ma publikowac event "end"
* */
var SimWorker = (function() {

})();

function runWorkers(MyWorker) {
  for (var i = 0; i < 3; i++) {
    var worker = new SimWorker({
      id: i
    });
    worker.on("message", function(data) {
      console.log(data);
    });
    worker.on("end", function(data) {
      console.log(data);
    });
    worker.start();
  }
}
//runWorkers(SimWorker);
