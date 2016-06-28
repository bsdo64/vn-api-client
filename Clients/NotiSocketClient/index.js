const io = require('socket.io-client');
const socket = io.connect('http://localhost:3003/noti', {reconnect: true});

module.exports = socket;
