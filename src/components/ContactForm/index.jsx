import React from "react"

// Styles
import {
  ContactFormForm,
  ContactFormFormButton,
  ContactFormFormGroup,
  ContactFormStyled,
  ContactFormTitle,
  ContactFormWrapper,
} from "./index.styles"

const ContactForm = () => {
  return (
    <ContactFormStyled>
      <ContactFormWrapper>
        <ContactFormTitle>Contact Form</ContactFormTitle>

        <ContactFormForm>
          <ContactFormFormGroup>
            <div className="duo">
              <div>
                <label htmlFor="name">First Name</label>
                <input type="text" id="first_name" name="first_name" />
              </div>

              <div>
                <label htmlFor="name">Last Name</label>
                <input type="text" id="last_name" name="last_name" />
              </div>
            </div>

            <div className="duo">
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input type="phone" id="phone" name="phone" />
              </div>
            </div>

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>

            <ContactFormFormButton type="submit">Submit</ContactFormFormButton>
          </ContactFormFormGroup>
        </ContactFormForm>
      </ContactFormWrapper>
    </ContactFormStyled>
  )
}

export default ContactForm
