import { useState } from "react"

export default function ContactForm () {
  const [name, setName] = useState("");
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  console.log(name, email, message)
  return (
    <div>
      <form name="react-contact-form" method="POST" >
        <input type="hidden" name="form-name" value="contact"></input>
        <div className="input">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" placeholder="Your Message" onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <button className="contact-background" type="submit">Send Message</button>
      </form>
    </div>
  )
}
