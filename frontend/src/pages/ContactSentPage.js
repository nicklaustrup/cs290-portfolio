import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

function ContactSentPage({ contact }) {

    const name = contact.name;
    const email = contact.email;
    const jobTitle = contact.jobTitle;
    const company = contact.company;
    const comment = contact.comment;
    const source = contact.source;
    const contactPref = contact.contactPref;
    const connection = contact.connection;


    return (
        <>
            <h2>Contact Information Sent</h2>
            <p>Successfully sent your contact information. If everything below looks correct then you are good to go!</p>

            <ul>
                <li>Name: {name} </li>
                <li>Email: {email} </li>
                <li>Job Title: {jobTitle} </li>
                <li>Company: {company} </li>
                <li>Message: {comment} </li>
                <li>Referral Source: {source} </li>
                <li>Contact Preferance: {contactPref} </li>
                <li>Connection Type: {connection} </li>
            </ul>


        </>
    );
}

export default ContactSentPage;