var Client = require('node-rest-client').Client;

var client = new Client();
var sendEmail = require('./email.js');
var constructedURL = "http://localhost:4300"
var mailOptions = {
    from: 'poojaEternalTech@gmail.com',
    to: 'tundurthypoojitha070@gmail.com',

    subject: 'Sending Email using Node.js',
    text: 'Hello pooja! how r u'
}


var args = {
    mailOptions: {
        from: 'poojaEternalTech@gmail.com',
        to: 'tundurthypoojitha070@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'Hello pooja! how r u'

    },
    headers: {
        "Content-Type": "application/json",
        url: constructedURL,
        type: "POST",
    }
};

// direct way
console.log(args)
client.post("http://localhost:4300", mailOptions, function(data, response) {
    // parsed response body as js object
    console.log(data);
    console.log(`sendEmail: ${sendEmail.sendEmail(mailOptions)}`)
        // raw response
        // console.log(response);
});