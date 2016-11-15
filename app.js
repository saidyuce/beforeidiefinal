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
	var transport = nodemailer.createTransport("SMTP", {
    	service: "hotmail",
    	auth: {
        	user: "m.onur.cevik@hotmail.com",
        	pass: "o147852369o=Onur"
    	}
	});
	var mailOptions = {
        from: "m.onur.cevik@hotmail.com", // sender address
        to: "beforeidiearge@gmail.com", // list of receivers
        subject: "asdsadsasa", // Subject line
        text: "zazaza", // plaintext body
    	}
	transport.sendMail(mailOptions, function(error, info){
    	if(error){
        	return console.log(error);
    	}
    	console.log('Message sent: ' + info.response);
	});
});

socket.on('disconnect', function () {
io.sockets.emit('User Disconnected');
});
});
