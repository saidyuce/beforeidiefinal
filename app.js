var io = require('socket.io').listen(65079);
var request = require('request');

console.log('Server acik beforeidie');

io.sockets.on('connection', function (socket) {
  console.log('Server listening on port: 65079');
  var address = socket.handshake.address;
  console.log('New connection from ' + address.address + ':' + address.port);

  io.sockets.emit('this', { will: 'be received by everyone'});

socket.on('email', function (msg) {
	var json = JSON.parse(msg);
	var api_key = json.api_key;
console.log('New Chat Message ', msg)
	// email gonder, sonra callbackteki msg yerine state yolla success veya fail
	var Sendgrid = require('sendgrid')(
  process.env.SENDGRID_API_KEY || api_key
);

var request = Sendgrid.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: {
    personalizations: [{
      to: [{ email: 'beforeidiearge@gmail.com' }],
      subject: 'Yeni gonderi var'
    }],
    from: { email: 'baris_dnmz93@gmail.com' },
    content: [{
      type: 'text/plain',
      value: 'name surname = ' + json.name 
	    + '\nphone = ' + json.phone 
	    + '\nemail = ' + json.email 
	    + '\nfirst = ' + json.first 
	    + '\nsecond = ' + json.second
	    + '\nthird = ' + json.third
    }]
  }
});

Sendgrid.API(request, function (error, response) {
  if (error) {
    console.log('Mail not sent; see error message below.');
	  socket.emit('callback', 'fail');
  } else {
    console.log('Mail sent successfully!');
	  socket.emit('callback', 'success');
  }
  console.log(response);
});
});

socket.on('disconnect', function () {
io.sockets.emit('User Disconnected');
});
});
