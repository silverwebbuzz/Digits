import { Injectable, Res } from '@nestjs/common';
import { SendGridService } from 'src/sendgrid/sendgrid.service';
import { CommonMethods } from 'src/utilities/common-methods';
import { MailDTO } from './mail.dto';

@Injectable()
export class MailService {
  constructor(private readonly sendGridService: SendGridService) {}
  async getResetMail(mailDTO: MailDTO, @Res() res): Promise<any> {
    const mail = {
      to: mailDTO.email,
      subject: 'Reset Password Link',
      from: 'ankit.k@simbiotiktech.com', // Fill it with your validated email on SendGrid account
      text: 'Hello',
      html: `<!DOCTYPE html>
        <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="x-apple-disable-message-reformatting">
        <title></title>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
          </style>
        </head>
        <body style="margin:0;padding:0;">
        <div style="width:550px;margin:auto;">
          <div style="padding:35px 50px 0;background:#ffbc38;">
            <div style="background:#fff;padding:50px 50px 0;text-align:center;"> <img src="http://${process.env.HOST}:${process.env.PORT}/adminManagement/uploads/admin/email-con1645179752559.png" style="width:40%;margin:auto;"> </div>
          </div>
          <div style="background:#f4f4f4;padding:0px 50px 0">
            <div style="background:#fff;padding:20px 50px 50px;text-align: center;">
              <h2 style="text-align:center;font-family: 'Poppins', sans-serif;margin:0;font-weight: 500;" >Reset Password!</h2>
              <p style="text-align: center;margin: 0px;font-family: 'Poppins', sans-serif;font-size: 17px;line-height: 22px;margin-top: 10px;">Hey,you're almost ready to reset password. Simply click the big yellow button below to reset password.</p>
              <a href="${mailDTO.link}" style="font-family: 'Poppins', sans-serif;font-weight: 600;display: inline-block;background:#ffbc38;color: #000;padding: 15px 20px;text-align: center;text-decoration: none;margin-top: 25px;border-radius: 30px;">Reset Password</a> </div>
          </div>
        </div>
        </body>
        </html> 
        `,
    };

    this.sendGridService.send(mail).then(() => {
      return CommonMethods.success(res, 'Mail sent successfully', []);
    });
    // .catch((error) => {
    setTimeout(() => {
      return CommonMethods.error(res, 'Mail not sent');
    }, 6000);
  }
}
