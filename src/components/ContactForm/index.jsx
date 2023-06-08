import React from "react"

// axios
import axios from "axios"

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
  const [formData, setFormData] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [formStatus, setFormStatus] = React.useState("idle") // idle, pending, success, error

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // submit form in multipart form data
  const handleSubmit = async e => {
    e.preventDefault()
    setFormStatus("pending")

    const contactForm = new FormData()
    contactForm.append("first_name", formData.first_name)
    contactForm.append("last_name", formData.last_name)
    contactForm.append("email", formData.email)
    contactForm.append("phone", formData.phone)
    contactForm.append("message", formData.message)

    try {
      const response = await axios.post(
        "https://demoswebadalona.es//wp-json/contact-form-7/v1/contact-forms/4902/feedback",
        contactForm,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )

      console.log("respomns", response)

      if (response.status === 200) {
        setFormStatus("success")
      }
    } catch (error) {
      console.log("error", error)
      setFormStatus("error")
    }

    // setFormData({
    //   first_name: "",
    //   last_name: "",
    //   email: "",
    //   phone: "",
    //   message: "",
    // })

    // setTimeout(() => {
    //   setFormStatus("idle")
    // }, 5000)
  }

  return (
    <ContactFormStyled>
      <ContactFormWrapper>
        <ContactFormTitle>Contact Form</ContactFormTitle>

        <ContactFormForm onSubmit={handleSubmit}>
          <ContactFormFormGroup>
            <div className="duo">
              <div>
                <label htmlFor="name">First Name</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="name">Last Name</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="duo">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <ContactFormFormButton type="submit">Submit</ContactFormFormButton>
          </ContactFormFormGroup>
        </ContactFormForm>
      </ContactFormWrapper>
    </ContactFormStyled>
  )
}

export default ContactForm
