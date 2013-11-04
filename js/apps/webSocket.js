/*
 Zaimplementuj klase ChatClient, ktora implementuje prosty chat oparty na WebSocketach
 * */

var CHAT;
function main() {
  var ip = "192.168.1.100";
  CHAT = new ChatClient("ws://" + ip + ":8080");
  CHAT.opened(function() {
    console.log("chat opened");
  });
  CHAT.open();
  CHAT.send({login: "batman", message: "some fancy message " + Math.random()});
  CHAT.close();
}
