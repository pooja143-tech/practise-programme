exports.sendEmail = function(mailOptions) {
    var fs = require('fs')
    fs.readFile('./table.pdf', function(err, data) {
        if (err) throw err;
        var nodemailer = require('nodemailer');
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            // service: 'gmail',
            auth: {
                user: 'poojaEternalTech@gmail.com',
                pass: 'tech143p'
            }
        });
        var mailOptions = {
            from: 'poojaEternalTech@gmail.com', // sender address                                   
            to: 'tundurthypoojitha070@gmail.com', // list of receivers                                 
            subject: 'Attachment', // Subject line                                                 
            text: 'Hello world attachment test', // plaintext body                                                 
            html: '<b>Hello world attachment test HTML</b>', // html body                                               
            attachments: [{
                filename: 'table.pdf',
                contentType: 'application/pdf'
            }]
        };

        // send mail with defined transport object                                                 
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });
        console.log(data);
    });
}