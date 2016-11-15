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

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://beforeidiearge%40gmail.com:beforeidie*arge@smtp.gmail.com');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'beforeidiearge@gmail.com', // sender address
    to: 'm.onur.cevik@hotmail.com', // list of receivers
    subject: 'Hello', // Subject line
    text: 'Hello world', // plaintext body
    html: 'Hello world' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
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
