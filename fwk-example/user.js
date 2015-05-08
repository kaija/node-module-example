var events = require('events');
var fwk = require('fwk');

var user = function(spec){
  var _super = {};
  var create;
  var update;
  var that = new events.EventEmitter();
  that.setMaxListeners(0);

  create = function(){
    console.log('yo created');
  };
  update = function(){
    console.log('yo updated');
  };
  fwk.method(that, 'create', create, _super);
  fwk.method(that, 'update', update, _super);
  return that;
};

exports.user = user;
