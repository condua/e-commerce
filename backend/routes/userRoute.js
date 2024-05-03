const express = require('express');
const { registerUser, loginUser, logoutUser, getUserDetails, forgotPassword, resetPassword, updatePassword, updateProfile, getAllUsers, getSingleUser, updateUserRole, deleteUser, resetPasswordOtp } = require('../controllers/userController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
const User = require('../models/userModel');
const nodemailer = require('nodemailer')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const router = express.Router();




router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);
router.route('/reset-password').post(resetPasswordOtp);

router.route('/me').get(isAuthenticatedUser, getUserDetails);

router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);

router.route('/password/update').put(isAuthenticatedUser, updatePassword);

router.route('/me/update').put(isAuthenticatedUser, updateProfile);

// router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers);
router.route("/admin/users").get(getAllUsers);

router.route("/admin/user/:id")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'noreply.ewallet.hcmut@gmail.com',
        pass: 'wsxweqdjcbdzenfn'
    }
});

router.post('/forgot-password', async (req, res) => {
        try {
          const { email } = req.body;
      
          // Generate a random 6-digit OTP
          const otp = Math.floor(100000 + Math.random() * 900000);
      
          // Save the OTP to the user's document in the database
          const user = await User.findOne({ email });
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }
          user.resetPasswordOTP = otp;
          await user.save();
      
          // Send the OTP to the user's email
          const mailOptions = {
              from: {
                  name: 'Roced',
                  address: 'noreply.ewallet.hcmut@gmail.com'
              },
              to: email,
              subject: 'Reset Password OTP',
              // text: `Your OTP for resetting password is: ${otp}`,
              html:`
              <!DOCTYPE html>
              <html>
              <head>
                  <base target="_top">
              </head>
              <body>
                  <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
                      <div style="margin:50px auto;width:80%;padding:20px 0">
                          <div style="border-bottom:5px solid #eee">
                              <a href="" style="font-size:30px;color: #f7c800;text-decoration:none;font-weight:600">E-Wallet</a>
                          </div>
                          <p style="font-size:15px">Hello ${email},</p>
                          <p>Thank you for choosing E-Wallet. Use this OTP to change your account password on the E-Wallet.</p>
                          <p>Remember, Never share this OTP with anyone.</p>
                          <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
                          <p style="font-size:15px;">Regards,<br />Team E-Wallet</p>
                          <hr style="border:none;border-top:5px solid #eee" />
                          <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                              <p>E-Wallet Inc</p>
                          </div>
                      </div>
                  </div>
              </body>
              </html>
          `
          };
      
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error('Error sending email:', error);
              res.status(500).json({ error: 'Error sending OTP email' });
            } else {
              console.log('Email sent:', info.response);
              res.status(200).json({ message: 'OTP sent successfully', otp: otp });
            }
          });
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: 'Server Error' });
        }
      });


router.post('/send-welcome-email', async(req, res) =>{
  try {
        const { email, name } = req.body
        const sendEmail = {
          from: {
            name: 'Roced',
            address: 'noreply.ewallet.hcmut@gmail.com'
          },
          to: email,
          subject: `Cảm ơn ${name} đã đăng ký thành công tài khoản tại Roced`,
          html:`
          <!DOCTYPE html>
          <html>
          <head>
              <base target="_top">
          </head>
          <body>
              <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
                  <div style="margin:50px auto;width:80%;padding:20px 0">
                      <div style="border-bottom:5px solid #eee">
                          <a href="" style="font-size:30px;color: #f7c800;text-decoration:none;font-weight:600">Roced</a>
                      </div>
                      <p style="font-size:15px">Xin chào ${name},</p>
                      <p>Cảm ơn bạn đã chọn Roced. Chúc bạn có một trải nghiệm mua sắm tuyệt vời tại Roced.</p>
                      <p>Mọi thắc mắc có thể liên hệ với đội ngũ chăm sóc khách hàng của Roced</p>
                      <h2 style="background: white;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;"><img src='https://i.imgur.com/Ohd5lFf.png'/></h2>
                      <p style="font-size:15px;">Trân trọng,<br />Roced</p>
                      <hr style="border:none;border-top:5px solid #eee" />
                      <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                          <p>Roced</p>
                      </div>
                  </div>
              </div>
          </body>
          </html>
          ` 
        };
        transporter.sendMail(sendEmail, (error, info) => 
        {
          if (error) 
          {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Error sending OTP email' });
          } 
          else 
          {
            console.log('Email sent:', info.response);
            res.status(200).json({ message: 'OTP sent successfully', otp: otp });
          }
         }
        )
        res.status(200).json({ message: 'sent successfully' });

  }catch(err){
    console.error(err);
  }
})    
        

module.exports = router;