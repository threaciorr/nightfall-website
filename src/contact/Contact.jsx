import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import './contact.css'
import { logo } from "../assets";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../hoc";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// template_t5ftd4b
// service_cbd9pun
// GqMnYyFXAGNStQ5d5
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cbd9pun', 'template_ahxp46v', form.current, 'GqMnYyFXAGNStQ5d5')
      .then((result) => {
        toast.success('Message send', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }, (error) => {
        toast.error('Nigga fuck yo message >:(', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      });
  };

  return (
    <div id="contact">
      <div class="contact-container">
        <div class="contact-background">
          <div class="contact-heading">
            <div class="contact-title">
              <p>get in touch</p>
              <h1>CONTACT US.</h1>
            </div>
            <div class="contact-img">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="formnship">
            <div className="form">
              <form ref={form} onSubmit={sendEmail}>
                <label className="email">
                  <span className="your-email">Name</span>
                  <input className="email-input" placeholder="your name" type="text" name="user_name" required />
                </label>
                <label class="subject">
                  <span className="title-subject">Email</span>
                  <input className="subject-input" placeholder="your email" type="email" name="user_email" required />
                </label>
                <label className="message">
                  <span class="title-message">Message</span>
                  <textarea className="message-input" placeholder="your message" name="message"  cols="30" rows="10" required /> 
                </label>
                <div class="button-conteiner">
                  <input className="button-submit" type="submit" value="Send" />
                  <ToastContainer
                    autoClose={5000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    />
                </div>
              </form>
            </div>
            <div className='ship'>
              <EarthCanvas />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default SectionWrapper(Contact, "contact");