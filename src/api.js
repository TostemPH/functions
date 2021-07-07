var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
		port: 587,
		secure: false,
		requireTLS: true,
        auth: {
            user: 'tostemphil.website@gmail.com', // generated ethereal user
            pass: 'TPH@2021'  // generated ethereal password
        }
    });


router.get('/',(req,res)=>{

    res.json({
        'hello':'hi'

    });
});
//API call (Product Enquire)
router.post('/sendEmailBA', function(req, res) {
    // fs.readFile(COMMENTS_FILE, function(err, data) {
    //   if (err) {
    //     console.error(err);
    //     process.exit(1);
    //   }
     var name = req.body.Name;
     var email = req.body.Email;
     var mobile = req.body.Mobile;
     var message = req.body.Message;
      console.log(email)
    //   // NOTE: In a real implementation, we would likely rely on a database or
    //   // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    //   // treat Date.now() as unique-enough for our purposes.
    //   var newComment = {
    //     id: Date.now(),
    //     author: req.body.author,
    //     text: req.body.text,
    //   };
    //   comments.push(newComment);
    //   fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function(err) {
    //     if (err) {
    //       console.error(err);
    //       process.exit(1);
    //     }
    //     res.json(comments);
    //   });
    // });
    //Sending Email
      var mailOptions = {
      from: 'TostemPhil.Website@gmail.com',
      to: 'danicamariel.bantog@lixil.com;mae.reyes@lixil.com;randy.rovero@lixil.com',
       subject: 'Tostem Book an Appointment',
       text: 'Hi Tostem PH, \r\n\r\n'+
      'Good day,\r\n I am '+name+', and I would like to book an appointment with you.\r\n'+
       'Here below is my information: \r\n'+
       'Email: '+email+'\r\n'+
       'Mobile No.: '+mobile+'\r\n'+
       'Message: '+message
       };
  
       transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
         res.json (error)
      } else {
        console.log('Email sent: ' + info.response);
        res.json('email sent')
      }
      });

    // res.json({
    // 'name':req.body.Name        
    // })
  
});

  //Api Call (Sign Up for News Letter)
router.post('/sendEmailNL', function(req, res) {
    // fs.readFile(COMMENTS_FILE, function(err, data) {
    //   if (err) {
    //     console.error(err);
    //     process.exit(1);
    //   }
    var email = req.body.Email;
      console.log(email)
    //   // NOTE: In a real implementation, we would likely rely on a database or
    //   // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    //   // treat Date.now() as unique-enough for our purposes.
    //   var newComment = {
    //     id: Date.now(),
    //     author: req.body.author,
    //     text: req.body.text,
    //   };
    //   comments.push(newComment);
    //   fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function(err) {
    //     if (err) {
    //       console.error(err);
    //       process.exit(1);
    //     }
    //     res.json(comments);
    //   });
    // });
    //Sending Email
      var mailOptions = {
       from: 'TostemPhil.Website@gmail.com',
      to: 'danicamariel.bantog@lixil.com;mae.reyes@lixil.com;randy.rovero@lixil.com',
       subject: 'Tostem Signing Up for News Letter',
       text: 'Hi Tostem PH, \r\n\r\n'+
       'The email below is signing up for News Letter: \r\n'+
       'Email: '+ email
       };
  
       transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
          res.json (error)
      } else {
        console.log('Email sent: ' + info.response);
        res.json('email sent')
      }
      });
  
});

router.post('/SendApplication',function(req,res){
	const name = req.body.Name;
	const email = req.body.Email;
	const mobile = req.body.mobile;
	const DAF = req.body.DealerForm
 // res.json(DAF.split("base64,")[1])
  var mailOptions = {
     from: 'TostemPhil.Website@gmail.com',
     to: 'danicamariel.bantog@lixil.com;mae.reyes@lixil.com;randy.rovero@lixil.com',
     subject: 'Tostem Signing Up for News Letter',
     text: 'Hi Tostem PH, \r\n\r\n'+
     'The email below is Tostem Delearship Application: \r\n'+
     'Name: '+ name+ '\r\n'+
     'Email: '+email+ '\r\n'+
     'Mobile: '+mobile,
     attachments: [
        {   // encoded string as an attachment
          filename: 'DealerApplication.xls',
          content: DAF.split("base64,")[1],
          encoding: 'base64'
        }
      ]
     };

     transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
        res.json (error)
    } else {
      console.log('Email sent: ' + info.response);
      res.json('email sent')
    }
    });

});
router.post('/sendEmailSub', function(req, res) {
  // fs.readFile(COMMENTS_FILE, function(err, data) {
  //   if (err) {
  //     console.error(err);
  //     process.exit(1);
  //   }
  //   var comments = JSON.parse(data);
  //   // NOTE: In a real implementation, we would likely rely on a database or
  //   // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
  //   // treat Date.now() as unique-enough for our purposes.
  //   var newComment = {
  //     id: Date.now(),
  //     author: req.body.author,
  //     text: req.body.text,
  //   };
  //   comments.push(newComment);
  //   fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function(err) {
  //     if (err) {
  //       console.error(err);
  //       process.exit(1);
  //     }
  //     res.json(comments);
  //   });
  // });
    console.log('nodemailerProject is listening at http://localhost:' + app.get('port') )
});
app.use('/.netlify/functions/api',router);

module.exports.handler = serverless(app);