require("dotenv").config();
const router = require("express").Router();
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "email",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.emailAddressUsed,
    pass: process.env.emailPassword,
  },
});

router.post("/", (req, res) => {
  console.log(process.env.emailPassword);
  const emailOptions = {
    from: process.env.emailAddressUsed,
    to: process.env.emailAddressToSend,
    subject: `${req.body.subject} - ${req.body.name}`,
    text: `${req.body.text}
You can recontact me at ${req.body.email}
Regards ${req.body.name}
    `,
  };

  transport.sendMail(emailOptions, (err, info) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({ info });
    }
  });
});

module.exports = router;
