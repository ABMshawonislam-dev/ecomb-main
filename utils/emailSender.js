const nodemailer = require("nodemailer");

exports.sendVerificationEmail = (email, name, url) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: "qprykxlicektqxiv",
    },
  });

  let info = {
    from: process.env.EMAIL, // sender address
    to: email, // list of receivers
    subject: "Oreby Ecommerce Verification Link", // Subject line
    html: `<img src="https://i.ibb.co/M9NpY71/logo.png"/> <h1 style="font-family: Arial, Helvetica, sans-serif; color: #262626"> A Great Big Thank You.. </h1> <p style="font-family: Arial, Helvetica, sans-serif; color: #262626"> For connecting with us </p><p style="font-family: Arial, Helvetica, sans-serif; color: #262626"> We love our customer and their feedback. Before continuing please verify your email by clicking the confirmation button ... </p><a style=" font-family: Arial, Helvetica, sans-serif; color: #fff; background: #2b2b2b; padding: 15px; text-decoration: none; display: inline-block; margin: 15px 0; " href="https://www.emailonacid.com/blog/article/email-development/best-font-for-email-everything-you-need-to-know-about-email-safe-fonts/#:~:text=Web%20safe%20fonts,-There%20are%20also&text=Arial%20(sans%2Dserif),Tahoma%20(sans%2Dserif)" >Confirm Email</a > <p style="font-family: Arial, Helvetica, sans-serif; color: #262626"> Copyright &copy; by Oreby </p>`, // html body
  };

  transporter.sendMail(info, (err, res) => {
    if (err) return err;
    
    return res;
  });
};
