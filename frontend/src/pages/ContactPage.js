import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


// export const ContactPageForm = () => {
function ContactPage({ setContact }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [comment, setComment] = useState('');

  const [source, setSource] = useState('');
  const [contactPref, setContactPref] = useState('');
  const [connection, setConnection] = useState('');

  const redirect = useNavigate();

  const sendMessage = async () => {
    const newMessage = { name, email, source, jobTitle, company, contactPref, connection, comment };
    const response = await fetch(process.env.url + '/contact', {
      method: 'post',
      body: JSON.stringify(newMessage),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      alert(`Message sent!`);
      setContact(newMessage);
      redirect("/contactsent");
    } else {
      alert(`Problem sending message = ${response.status}`);
      redirect("/contactsent");
    }
  };

  return (
    <>
      <h2>
        Contact
      </h2>
      <article>
        {/* The action attribute refers to a script, or to a route for the data.
        The method refers to a GET or POST request. POST is most common.
        You will learn about methods and routes later. */}
        <p>
          This page demonstrates the use of form submissions, React state variables, asynchronuous programming, and sending a fetch request to the backend controller then displaying the results.
          When you submit the form, an email is generated using Nodemailer and sent to an Ethereal email address specified in the backend.
        </p>


        <p>
          Please enter your information below and I'll get in contact with you soon.
        </p>
        <form onSubmit={(e) => { e.preventDefault(); }}>

          {/* <!-- The fieldset element is used to group several labels and controls within a form.
        --> */}
          <fieldset>

            {/* <!-- The legend element is used to describe this fieldset, and perhaps prompt the user.
            Use one legend per fieldset. 
            --> */}
            <legend>Tell me about yourself</legend>


            {/* <!-- It is best practice to require the user's name in a form, so you can refer to them when replying.
            Input of type text will take a string.
            Every Input gets a Label.
            Match the label's for attribute with the input's ID.
            Set the number of characters with maxlength, and the visible width with size.
            Show the correct data input format with a placeholder example.
            If this is the first field in the form, then provide autofocus so the cursor is ready for typing.
                 Inputs are self-closing with />.
          --> */}
            <p><label htmlFor="formName" className="required">First and Last Name</label>
              <input type="text"
                name="name"
                id="formName"
                size="30"
                maxLength="100"
                required
                placeholder="First and Last Name"
                onChange={e => setName(e.target.value)}
                autoFocus />
            </p>


            {/* <!-- A typical email field includes many attributes.
            Require the email, so you can respond to the user.
            Match the label's for attribute with the input's ID.
            Set the number of characters with maxlength and the visible width with size.
            Use the pattern attribute with a regular expression to check for the correct format.
            Show the correct data input format with a placeholder example.
            --> */}
            <p>
              <label htmlFor="email" className="required">Email</label>
              <input
                type="email"
                name="email"
                id="formEmail"
                size="30"
                maxLength="100"
                required
                pattern="[^ @]+@[^ @]+.[a-z]+"
                placeholder="name@host.com"
                onChange={e => setEmail(e.target.value)} />
            </p>

            <p>
              <label htmlFor="formTitle" className="required">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                id="formTitle"
                size="30"
                maxLength="100"
                placeholder="Enter your job title"
                onChange={e => setJobTitle(e.target.value)} />
            </p>

            <p>
              <label htmlFor="formOrganization" className="required">Company</label>
              <input
                type="text"
                name="organization"
                id="formOrganization"
                size="30"
                maxLength="100"
                required
                placeholder="Enter your employer name"
                onChange={e => setCompany(e.target.value)} />
            </p>

            {/* <!-- To elicit a paragraph response, use textarea.
            Set limits for textboxes to help avoid script injections, then
            tell the users how much text is allowed, in a paragraph, label, or placeholder.
            Textarea fields are not self-closing.
            A better textarea will be styled with height and width via the stylesheet file.
            Do not use the values of this example in the Assignment.
          --> */}

            <p><label htmlFor="formComment" className="required">Brief overview of our discussion</label>
              <textarea
                name="comment"
                id="formComment"
                minlenth="3"
                maxLength="250"
                required
                placeholder="What would you like to talk about?"
                onChange={e => setComment(e.target.value)}
              ></textarea>
            </p>

          </fieldset>


          {/* <!--IMPORTANT: The following topics for select, radio, and checkbox inputs
          may NOT be used for the Assignments.
        --> */}

          <fieldset>
            <legend>Topic of our discussion</legend>

            {/* <!-- Notice how the options are nested inside the select tag and use the value attribute
            The most obvious choice is already selected.
            Do not use the topic of this example in the Assignment.
          --> */}
            <label htmlFor="formSource">How did you hear about me?</label>
            <select name="source" id="formSource" defaultValue="a referral" onChange={e => setSource(e.target.value)}>
              <option value="a referral">Referral</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="a classmate">Classmate</option>
              <option value="seeing my work">Saw your work</option>
            </select>


            {/* <!-- When users must choose a single option (usually binary),
            provide radio buttons grouped by name.
            Notice how the label text is after the input, rather than before.
            The value values can be a string,
            but the name, id, and for values must be single words in camelCase.
            Do not use the topic of this example in the Assignment.
          --> */}
            <p>How would you like me to contact you?
              <label htmlFor="contactPhone" onChange={e => setContactPref(e.target.value)}>
                <input type="radio" name="contact" id="contactPhone" value="phone" />
                Phone
              </label>

              <label htmlFor="contactZoom">
                <input type="radio" name="contact" id="contactZoom" value="Zoom" />
                Zoom
              </label>

              <label htmlFor="contactEmail">
                <input type="radio" name="contact" id="contactEmail" value="email" />
                Email
              </label>
            </p>

            {/* <!-- When users are allowed to choose more than one response,
            provide checkboxes grouped by name.
            Notice how the label text is after the input, rather than before.
            The value values can be a string,
            but the name, id, and for values must be single words in camelCase.
            Do not use the topic of this example in the Assignment.
          --> */}
            <p> What is the nature of our call?</p>
            <p>
              <label htmlFor="connectionNetwork">
                <input type="checkbox" name="connection" id="connectionNetwork" value="networking" defaultChecked="yes" onChange={e => setConnection(e.target.value)} />
                Networking</label>
            </p>
            <p>
              <label htmlFor="connectionRecruiting">
                <input type="checkbox" name="connection" id="connectionRecruiting" value="recruiting" onChange={e => setConnection(e.target.value)} />
                Recruiting</label>
            </p>
            <p>
              <label htmlFor="connectionSocial">
                <input type="checkbox" name="connection" id="connectionSocial" value="social" onChange={e => setConnection(e.target.value)} />
                Social</label>
            </p>


            {/* <!-- Use the button element to send the data.
            It is not self-closing.
          --> */}
            <button type="submit" onClick={sendMessage}>Contact me</button>

          </fieldset>
        </form>
      </article>
    </>
  );
}

export default ContactPage;