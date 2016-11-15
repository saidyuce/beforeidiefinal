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
	var express = require('express');
	var app = express();
	var smtpTransport = nodemailer.createTransport(smtpTransport({
    host : "smtp.live.com",
    secureConnection : false,
    port: 587,
    auth : {
        user : "m.onur.cevik@hotmail.com",
        pass : "o147852369o=Onur"
    }
}));
app.get('/send',function(req,res){
    var mailOptions={
        from : "m.onur.cevik@hotmail.com",
        to : "beforeidiearge@gmail.com",
        subject : "Your Subject",
        text : "Your Text",
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.end("error");
        }else{
            console.log(response.response.toString());
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
});

app.listen(3002,function(){
    console.log("Express Started on Port 3002");
});
});

socket.on('disconnect', function () {
io.sockets.emit('User Disconnected');
});
});
