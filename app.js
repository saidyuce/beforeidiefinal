var io = require('socket.io').listen(65079);
var request = require('request');
console.log('Server acik beforeidie');

io.sockets.on('connection', function (socket) {
  console.log('Server listening on port: 65079');
  var address = socket.handshake.address;
  console.log('New connection from ' + address.address + ':' + address.port);

  io.sockets.emit('this', { will: 'be received by everyone'});

socket.on('email', function (msg) {
console.log('New Chat Message ', msg)
	// email gonder, sonra callbackteki msg yerine state yolla success veya fail
	var email   = require("/home/baris_dnmz93/node_modules/emailjs/email");
	var server  = email.server.connect({
 		user: "m.onur.cevik@hotmail.com", 
  		password: "o147852369o=Onur", 
   		host: "smtp.live.com", 
  		ssl: true,
		port: 587,
		tls: {
        	ciphers:'SSLv3'
    		}
	});

// send the message and get a callback with an error or details of the message that was sent
	server.send({
   		text:    "i hope this works", 
   		from:    "m.onur.cevik@hotmail.com", 
   		to:      "m.onur.cevik@hotmail.com",
   		subject: "testing emailjs"
	}, function(err, message) {
		if (err) {
			socket.emit('callback', 'fail'); 
		} else {
			socket.emit('callback', 'success');
		}
		console.log(err || message); 
	});
});

socket.on('disconnect', function () {
io.sockets.emit('User Disconnected');
});
});
