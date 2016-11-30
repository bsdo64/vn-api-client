const io = require('socket.io-client');

let manager;
if (process.env.NODE_ENV === 'production') {
  manager = io.Manager('http://io.venacle.com');
} else {
  manager = io.Manager('http://localhost:3003');
}

exports.Point = manager.socket('/point', {reconnect: true});
exports.Noti = manager.socket('/noti', {reconnect: true});
exports.Venalink = manager.socket('/venalink', {reconnect: true});