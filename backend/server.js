const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer transporter (setup once)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'yashnaglaoff@gmail.com',
        pass: 'fkum zfbw xsph yrde'
    }
});


// Route
app.post('/api/contact', async (req, res) => {
    const { name, email, phoneNumber, service, message } = req.body;

    try {
        await transporter.sendMail({
            from: email,
            to: 'yashnaglaoff@gmail.com',
            subject: `${service}`,
            html: `
                <h3>New Message from ${name}</h3>
                <p><strong>Email :-</strong> ${email}</p>
                <p><strong>Phone Number :-</strong> ${phoneNumber}</p>
                <p><strong>Service of Interest :-</strong> ${service}</p>
                <p><strong>Message :-</strong></p>
                <p>${message}</p>
            `
        });

        res.status(200).json({ success: true, message: 'Email sent successfully!' });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
    
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
