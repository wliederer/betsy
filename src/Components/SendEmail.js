import React, { useState, useRef } from 'react'
import './SendEmail.css'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_8om0mif'
const TEMPLATE_ID = 'template_spprxgg'
const PUBLIC_KEY = '2eyHiJYODn1OC-921'
export const handleSendEmail = async (message) => {
  // if (e) e.preventDefault()

  emailjs.send(SERVICE_ID, TEMPLATE_ID, { message: message }, PUBLIC_KEY).then(
    (result) => {
      console.log(result.text)
    },
    (error) => {
      console.log(error.text)
    },
  )
}

const SendEmail = () => {
  const [message, setMessage] = useState('')

  return (
    <div className="email-container">
      <div className="heading">
        * Send me a message to connect or ask for stickers
      </div>

      <div>
        <form>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div>
            <button
              className="send"
              onClick={(e) => {
                e.preventDefault()
                handleSendEmail(message).then(() => setMessage(''))
              }}
            >
              Send Email
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SendEmail
