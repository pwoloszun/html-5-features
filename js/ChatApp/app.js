/*
 * Zaimplementuj chat (klasa ChatSession) przy uzyciu WebSocket
 * 1. Uwaga: wysylane na serwer dane musza byc w formacie:
 *   {login: "batman", message: "cokolwiek"}
 * 2. odpowiedz z serwera wyswietl na GUI
 * 3. uzywaj JSON.stringify(object), oraz JSON.parse(string)
 * */
var CHAT;

$(function() {
  var host = "guarded-harbor-8742.herokuapp.com:80/chat";

  CHAT = new ChatSession({ // opens new WS
    host: host,
    login: "Batman " + Math.floor(Math.random() * 1000)
  });

  CHAT.on("error", function(error) {
    console.log("error", error);
  });

  CHAT.on("message", function(msg) { // fires listener when message arrives from server
    console.log("received", msg);
  });

  CHAT.send("some fancy message " + Math.random()); // sends JSON {login: "Batman", message: "some fancy message 0.1029"}

//  CHAT.close(); // close WS
});
