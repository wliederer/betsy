import React, { useState, useRef } from 'react'
import './SendEmail.css'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_8om0mif'
const TEMPLATE_ID = 'template_spprxgg'
const PUBLIC_KEY = '2eyHiJYODn1OC-921'

const SendEmail = () => {
  const [message, setMessage] = useState('')
  const form = useRef()

  const handleSendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      },
    )

    // Clear the input fields after sending the email
    setMessage('')
  }

  return (
    <div className="email-container">
      <div className="heading">
        * Send me a message to connect or ask for stickers
      </div>

      <div>
        <form ref={form} onSubmit={handleSendEmail}>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div>
            <button className="send" type="submit">
              Send Email
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SendEmail
