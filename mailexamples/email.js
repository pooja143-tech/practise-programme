var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'poojithakajal202@gmail.com',
    pass: 'password'
  }
});

var mailOptions = {
  from: 'poojithakajal020gmail.com',
  to: 'tundurthypoojitha070@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
