"use strict";
const nodemailer = require("nodemailer");


async function main() {

  let testAccount = await nodemailer.createTestAccount();


  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
      user: testAccount.user, 
      pass: testAccount.pass 
    }
  });


  let info = await transporter.sendMail({
    from: 'nicolas.alberga@gmail.com',
    to: 'nico010570@yahoo.com', 
    subject: "Hello ✔", 
    text: "Hello world?", 
    html: "<b>Hello world?</b>" 
  });

  console.log("Message sent: %s", info.messageId);


 
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}

main().catch(console.error);