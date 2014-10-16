var Zombie = (function(utils) {

  function _randomizeProperties() {
    this._speed = utils.randomBetween(1, 5);
    this._x = utils.randomBetween(0, this._maxX);
    this._y = utils.randomBetween(0, this._maxY);
  }

  function _triggerEvent(eventName, args) {
    var listener = this._events[eventName];
    args = args || [];
    if (listener)
      listener.apply(this, args);
  }

  function _startLiving() {
    clearTimeout(this._timeoutId);
    _randomizeProperties.call(this);
    _triggerEvent.call(this, "change");
    var that = this;
    this._timeoutId = setTimeout(function() {
      _startLiving.call(that);
    }, utils.randomBetween(1, 5) * 1000);
  }

  function _moveToDestination(coords) {
    clearTimeout(this._timeoutId);
    this._speed = 5;
    this._x = coords.x;
    this._y = coords.y;
    _triggerEvent.call(this, "change");
    var that = this;
    this._timeoutId = setTimeout(function() {
      _startLiving.call(that);
    }, 4000);
  }

  function Zombie(maxX, maxY) {
    this._maxX = maxX;
    this._maxY = maxY;
    this._events = {};
    _startLiving.call(this);
  }

  Zombie.prototype.setDestination = function(coords) {
    _moveToDestination.call(this, coords);
  };

  Zombie.prototype.on = function(eventName, listener) {
    this._events[eventName] = listener;
  };

  Zombie.prototype.getSpeed = function() {
    return 5000 / this._speed;
  };

  Zombie.prototype.getDestination = function() {
    return {
      left: this._x,
      top: this._y
    };
  };

  return Zombie;
})(utils);
