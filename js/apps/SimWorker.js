/*
  Zaimplementuj apke, ktora stworzy kilka SimWorkerow.
  - Kazdy worker ma pracowac losowa ilosc sekund pomiedzy (5..15)
  - co sekunde worker ma publikowac event "message" do skryptu glownego ze swoim id
  - na koniec swojej pracy worker ma publikowac event "end"
* */
var SimWorker = (function() {

})();

function runWorkers(SimWorker) {
  for (var i = 0; i < 5; i++) {
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
