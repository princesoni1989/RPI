/**
 * Created by ttnd on 15/5/16.
 */
var raspi = require('raspi-io');
var five = require('johnny-five');
var board = new five.Board({
  io: new raspi()
});

exports.increaseLight = function (value) {
  board.on('ready', function() {
    var led = (new five.Led('P1-7'));
    led.brightness(value);
  });
};

exports.SwitchLight = function (value, callback) {
  board.on('ready', function() {
    var led = (new five.Led('P1-7'));
    if(value === 'on'){
      led.on();
    }else{
      led.off();
    }
    callback();
  });
};
