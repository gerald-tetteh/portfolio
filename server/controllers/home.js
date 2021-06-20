// home controllers
const nodemailer = require("nodemailer");

const config = require("../utilities/envVariables");

const transporter = nodemailer.createTransport({
  service: "SendinBlue",
  auth: {
    user: "addodevelop@gmail.com",
    pass: config.mailAuth,
  },
});

exports.postChat = async (req, res, next) => {
  const email = req.body.email;
  const name = req.body.name;
  const message = req.body.message;
  try {
    await transporter.sendMail({
      to: "addodevelop@gmail.com",
      from: email,
      subject: name,
      html: `<p>${message}</p>`,
    });
    transporter.sendMail({
      to: email,
      from: "Gerald Addo-Tetteh addodevelop@gmail.com",
      subject: "Message Received",
      html: `
      <p>Hello ${name},</p>
      <p>
        Thank you for visiting my site and sending me a message.
        I will reply to that email soon.
      </p>
      <p>
        Regards,<br>
        Gerald Addo-Tetteh.
      </p>
      `,
      replyTo: "addodevelop@gmail.com",
    });
    res.status(200).end();
  } catch (e) {
    console.log(e.message);
    res.status(500).end();
  }
};
