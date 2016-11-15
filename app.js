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
	var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport("SMTP", {
        service: 'Gmail',
        auth: {
            user: "beforeidiearge@gmail.com",
            pass: "beforeidie*arge"
        }
    });

console.log('SMTP Configured');

// Message object
var message = {

    // sender info
    from: 'beforeidiearge@gmail.com',

    // Comma separated list of recipients
    to: 'm.onur.cevik@hotmail.com',

    // Subject of the message
    subject: 'Nodemailer is unicode friendly ✔', 

    // plaintext body
    text: 'Hello to myself!',

    // HTML body
    html:'<p><b>Hello</b> to myself <img src="cid:note@node"/></p>'+
         '<p>Here\'s a nyan cat for you as an embedded attachment:<br/></p>'
};

console.log('Sending Mail');
transport.sendMail(message, function(error){
  if(error){
      console.log('Error occured');
      console.log(error.message);
      return;
  }
  console.log('Message sent successfully!');

  // if you don't want to use this transport object anymore, uncomment following line
  //transport.close(); // close the connection pool
});
});

socket.on('disconnect', function () {
io.sockets.emit('User Disconnected');
});
});
