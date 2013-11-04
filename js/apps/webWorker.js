/*
  Zaimplementuj apke, ktora stworzy 3 WebWorkery.
  Do kazdego WebWorkera przekaze ten sam kupon do losowania lotto.
  Nastepnei kazdy z WebWorkerow przy wykorzystaniu klasy LottoSimulator
  zasymuluje ilosc lat potrzebna do trafienia kuponu i wynik zwroci do skryptu glownego
* */
function main() {
  var coupon = [1,2,3, 15, 23, 44];
  var workers = [];
  for (var i = 0; i < 3; i++) {
    var worker = new Worker();
    workers.push(worker);
    worker.onEnd(function(yearsToWin) {
      console.log(yearsToWin);
    });
    worker.start(coupon);
  }
}
