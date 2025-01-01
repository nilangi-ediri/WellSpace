import Booking from "../Models/BookingSchema.js";
import nodemailer from 'nodemailer';

// Send booking confirmation notification
export const sendBookingConfirmation = async (req, res) => {
    const { bookingId, email } = req.body;
    try {
        const booking = await Booking.findById(bookingId);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        
        // Send email logic using nodemailer
        let transporter = nodemailer.createTransport("SMTP",{
            host: "smtp.qq.com", // 主机
            secureConnection: true, // 使用 SSL
            port: 465, // SMTP 端口
            auth: {
              user: "362625119@qq.com", // 账号
              pass: "curbchedhmvybhje" // 密码
            }
          });

        let mailOptions = {
            from: '362625119@qq.com',
            to: email,
            subject: 'Booking Confirmation',
            text: `Your booking is confirmed for ${booking.preferredDate} at ${booking.preferredTime}.`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ message: error.message });
            }
            res.status(200).json({ message: 'Booking confirmation sent successfully' });
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Send booking reminder notification
export const sendBookingReminder = async (req, res) => {
    const { bookingId, email, reminderDate } = req.body;
    try {
        const booking = await Booking.findById(bookingId);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        
        // Send email logic using nodemailer
        let transporter = nodemailer.createTransport({
            host: "smtp.qq.com", // 主机
            secureConnection: true, // 使用 SSL
            port: 465, // SMTP 端口
            auth: {
              user: "362625119@qq.com", // 账号
              pass: "curbchedhmvybhje" // 密码
            }
          });

        let mailOptions = {
            from: '362625119@qq.com',
            to: email,
            subject: 'Booking Reminder',
            text: `This is a reminder for your booking on ${booking.preferredDate} at ${booking.preferredTime}.`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ message: error.message });
            }
            res.status(200).json({ message: 'Booking reminder sent successfully' });
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
