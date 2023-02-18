var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "marwenbennaceur*@outlook.com",
    pass: "*********",
  },
  tls: {
    rejectUnauthorized: false
}
});

var mailOptions = {
  from: "marwenbennaceur*@outlook.com",
  to: "anonymous******@gmail.com",
  subject: "Sending Email Test",
  text: "Testing nodemailer",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "marwenbennaceur*@outlook.com",
    pass: "*********",
  },
  tls: {
    rejectUnauthorized: false
}
});

var mailOptions = {
  from: "marwenbennaceur*@outlook.com",
  to: "anonymous******@gmail.com",
  subject: "Sending Email Test",
  text: "Testing nodemailer",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});