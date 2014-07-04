
var ChatSession = (function() {

  function _sendQueuedMessages() {
    var message;
    for (var i = 0; i < this._queuedMessages.length; i++) {
      message = this._queuedMessages[i];
      _sendSingleMessage.call(this, message);
    }
  }

  function _sendSingleMessage(message) {
    var jsonStr = JSON.stringify({
      login: this._login,
      message: message
    });
    this._socket.send(jsonStr);
  }

  function _trigger(eventName, args) {
    var listener = this._events[eventName];
    args = args || [];
    if (listener)
      listener.apply(this, args);
  }

  function _initSocket(params) {
    var that = this;
    this._socket = new WebSocket("ws://" + params.host);
    this._socket.onopen = function() {
      _sendQueuedMessages.call(that);
      that._queuedMessages = [];
    };
    this._socket.onmessage = function(event) {
      var msg;
      try {
        msg = JSON.parse(event.data);
      } catch (e) {
        msg = event.data;
      }
      _trigger.call(that, "message", [msg]);
    };
    this._socket.onerror = function(error) {
      _trigger.call(that, "error", [error]);
    };
  }

  function ChatSession(params) {
    this._login = params.login;
    this._events = {};
    this._queuedMessages = [];
    _initSocket.call(this, params);
  }

  ChatSession.prototype.on = function(eventName, listener) {
    this._events[eventName] = listener;
  };

  ChatSession.prototype.send = function(message) {
    if (this._socket.readyState === 1)
      _sendSingleMessage.call(this, message);
    else
      this._queuedMessages.push(message);
  };

  ChatSession.prototype.close = function() {
    this._socket.close();
  };

  return ChatSession;
})();
