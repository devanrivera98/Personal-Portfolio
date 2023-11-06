import { useState } from "react"

export default function ContactForm () {
  const [name, setName] = useState("");
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  console.log(name, email, message)
  return (
    <div className="bg-lightBlue pb-5">
      <h1 className="text-3xl text-center py-5">Contact Me</h1>
      <div className="md:items-center">
        <form className="flex flex-col gap-5 md:w-1/2 lg:w-1/3 mx-auto" name="react-contact-form" method="POST" >
          <input type="hidden" name="form-name" value="contact"></input>
          <div className="input flex flex-col">
            <label className="ml-5 pb-1" htmlFor="name">Name</label>
            <input className="mx-5 pl-1 rounded" type="text" id="name" name="name" placeholder="John Doe" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="input flex flex-col">
            <label className="ml-5 pb-1" htmlFor="email">Email</label>
            <input className="mx-5 rounded pl-1" type="text" id="email" name="email" placeholder="johndoe@gmail.com" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input flex flex-col">
            <label className="ml-5 pb-1" htmlFor="message">Message</label>
            <textarea className="mx-5 rounded pl-1" name="message" id="message" placeholder="Type your message here" onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <button className="contact-background mx-5" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}
