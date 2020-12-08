import nodemailer from "nodemailer";

interface SendEmailProps {
  recipient: string;
  url: string;
  linkText: string;
  subject: string;
}

export const sendEmail = async ({
  recipient,
  url,
  linkText,
  subject,
}: SendEmailProps) => {
  nodemailer.createTestAccount((err, account) => {
    if (err) {
      console.error("Failed to create testing account. " + err.message);
    }

    const transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });

    const email = {
      from: "Trakku <trakku@no-reply.com>",
      to: `Recipient ${recipient}`,
      subject,
      text: "Some text",
      html: `<html>
      <body>
      <p>Click the link to accept the invitation</p>
      <a href="${url}">${linkText}</a>
      </body>
      </html>`,
    };

    transporter.sendMail(email, (err, info) => {
      if (err) {
        console.error("Error while sending email. " + err.message);
      }

      console.log("Message sent: %s", info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
};
