import nodemailer from 'nodemailer';
import qs from 'qs';

export default async function handler(req, res) {
    if (req.method === "POST") {
        const name = req.body.name;
        const email = req.body.email;
        const phoneNumber = req.body.phoneNumber;
        const rentalStartDate = req.body.rentalStartDate;
        const message = req.body.message;

        try {
            const baseUrl = 'https://www.lepineapartments.com/strapi/api/form-submission/createFormSubmission';

            const query = qs.stringify({
                firstName: name,
                lastName: null,
                email,
                phoneNumber,
                message: `Premier: ${message}`
            });

            const url = `${baseUrl}?${query}`;
            
            await fetch(url, {
                method: "GET"
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error })
        }
        
        const html = `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone Number: ${phoneNumber}</p>
            <p>Rental Start Date: ${rentalStartDate}</p>
            <p>Message: ${message}</p>
        `;

        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASSWORD,
            },
        });
    
        try {
            let message = {
                from: '"Premier Appliances Mailer", <nodemailer@lepinecorp.com>',
                to: 'info@premierappliances.ca',
                bcc: 'ryan.peterson@lepinecorp.com',
                html,
                subject: "Premier Appliances Inquiry"
            }
        
            transporter.sendMail(message);
    
            return res.status(200).json({ message: 'Thank you! Your inquiry has been received.' });
        } catch (error) {
            return res.status(400).json({ error: 'Something went wrong! Please email info@premierappliances.ca' });
        }
    } else {
        return res.status(400).json({ message: "Forbidden" });
    }
}