// Controllers for the Property Collection

import 'dotenv/config';
import express from 'express';
import * as properties from './property-model.mjs';
// Use at least Nodemailer v4.1.0
import { createTestAccount, createTransport, getTestMessageUrl } from 'nodemailer';

const PORT = process.env.PORT;
const app = express();
const FRONTEND = process.env.FRONTEND
const BACKEND = process.env.BACKEND
const cors = require('cors');
app.use(cors({
    origin: `${FRONTEND}`,
    optionsSuccessStatus: 200
}));
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post(`${BACKEND}/properties`, (req, res) => {
    properties.createProperty(
        req.body.item,
        req.body.quantity,
        req.body.depositDate,
        req.body.category
    )
        .then(property => {
            console.log(`"${property.item}" was added to the collection.`);
            res.status(201).json(property);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'There was a problem adding property to the collection.' });
        });
});


// RETRIEVE controller ****************************************************
app.get(`${BACKEND}/properties`, (req, res) => {
    properties.retrieveProperties()
        .then(properties => {
            if (properties !== null) {
                console.log(`All properties were retrieved from the collection.`);
                res.json(properties);
            } else {
                res.status(404).json({ Error: 'Problem fetching all properties - Properties is NULL.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Problem fetching all properties - error thrown.' });
        });
});


// RETRIEVE by ID controller
app.get(`${BACKEND}/properties/:_id`, (req, res) => {
    properties.retrievePropertyByID(req.params._id)
        .then(property => {
            if (property !== null) {
                console.log(`"${property.item}" was retrieved, based on its ID.`);
                res.json(property);
            } else {
                res.status(404).json({ Error: 'Property failed to get - NULL property.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Could not retrieve property by Id - error thrown.' });
        });

});


// UPDATE controller ************************************
app.put(`${BACKEND}/properties/:_id`, (req, res) => {
    properties.updateProperty(
        req.params._id,
        req.body.item,
        req.body.quantity,
        req.body.depositDate,
        req.body.category
    )
        .then(property => {
            console.log(`"${property.item}" was updated.`);
            res.json(property);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to update property - error thrown.' });
        });
});


// DELETE Controller ******************************
app.delete(`${BACKEND}/properties/:_id`, (req, res) => {
    properties.deletePropertyById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} property was deleted.`);
                res.status(200).send({ Success: 'Successsfully removed property.' });
            } else {
                res.status(404).json({ Error: 'Failed to delete property - could not locate.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Failed to delete property - error thrown.' });
        });
});


// MAIL CONTROLLER -----------------------------|
// Generate SMTP service account from ethereal.email
app.post(`${BACKEND}/contact`, (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let source = req.body.source;
    let contact = req.body.contact;
    let connection = req.body.connection;
    let comment = req.body.comment;


    createTestAccount((err, account) => {
        if (err) {
            console.error('Failed to create a testing account. ' + err.message);
            return process.exit(1);
        }

        console.log('Credentials obtained, sending message...');

        // Create a SMTP transporter object
        let transporter = createTransport({
            host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure,
            auth: {
                user: "eleanora.mcclure@ethereal.email",
                pass: "DA69smB4pfhbdE4THE"
            }
        });

        // Message object
        let message = {
            from: () => {
                let from = "'" + {name} + " " + "<" + {email} + ">" + "'";
                return from;
            },
            to: 'Justine <justine.parisian@ethereal.email>',
            subject: 'Nodemailer is unicode friendly ✔',
            text: `${comment}`,
            html: `${comment}`
        };

        transporter.sendMail(message, (err, info) => {
            if (err) {
                console.log('Error occurred. ' + err.message);
                return process.exit(1);
            }

            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', getTestMessageUrl(info));
        });
    });
});





app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});