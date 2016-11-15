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
	var smtpTransport = require('nodemailer-smtp-transport');

var options = {
    service: 'gmail',
    auth: {
        user: 'beforeidiearge@gmail.com',
        pass: 'beforeidie*arge'
    }
  };
  var transporter = nodemailer.createTransport(smtpTransport(options))


  // setup e-mail data with unicode symbols
  var mailOptions = {
    from: 'beforeidiearge@gmail.com', // sender address
    to: 'm.onur.cevik@hotmail.com', // list of receivers
    subject: 'asfs', // Subject line
    text: 'sagsagasgsa', // plaintext body
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, response){
      if(error){
          console.log(error);
      }else{
          console.log("Message sent: " + response.message);
      }

      // if you don't want to use this transport object anymore, uncomment following line
      //smtpTransport.close(); // shut down the connection pool, no more messages
  });
});

socket.on('disconnect', function () {
io.sockets.emit('User Disconnected');
});
});
