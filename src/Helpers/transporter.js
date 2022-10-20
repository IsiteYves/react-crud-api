const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
    host: "",
    port: 465,
    secure: true,
    auth: {     
           user: "",
           pass: ""
    }
});

module.exports = transporter;