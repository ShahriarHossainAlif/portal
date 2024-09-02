import "./Form.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const form = useRef();
  const notify = () => toast("Thanks for your response! I'll get to you soon!");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wccx63i', 'template_k7vqs4b', form.current, {
        publicKey: 'bYFKa0WNCP1ZVthzq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
  return (

       <div className="form">
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea rows="6" placeholder="Type your message here" name="message" />
      
      <input className="btn" onClick={notify} type="submit" value="Send" />
      <ToastContainer />
    </form>
    </div>

     
    
  )
}

export default Form
