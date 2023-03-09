import React, { useRef } from 'react'
// import { useRef } from 'react'
import emailjs from '@emailjs/browser'

import './Contact.css'
// import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {
    // <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_h6pd1tp', 'template_y4jmgiv', form.current, 'EIb2WEWc6lB84H1gE')
          .then((result) => {
              console.log(result.text);
            }, (error) => {
              console.log(error.text);
            });
        
            e.target.reset();
    };

    return (
        <>
        <section className='ContactSection'>
            <div id='Contact' className='ContactContainer'>
                {/* <div className='LeftContainer'>

                    <article className='ContactOption'>
                        <div className="ContactImg">
                            
                        </div>
                        <a href='mailto:juanmotasanchez1@gmail.com' target='_blank'>
                            <h3>Email</h3>
                            <h4>JuanMotaSanchez1@gmail.com</h4>
                        </a>
                    </article>

                    <article className='ContactOption'>
                        <div className="ContactImg">

                        </div>
                        <a href='https://api.whatsapp.com/send?phone=16362198733' target='_blank'>
                            <h3>WhatsApp</h3>
                            <h4>+1 (636) 219-8733</h4>
                        </a>
                    </article>

                    <article className='ContactOption'>
                            <div className="ContactImg">
                            
                            </div>
                        <a href='https://www.linkedin.com/in/juan-mota-sanchez' target='_blank'>
                            <h3>LinkedIn</h3>
                            <h4>Juan Mota Sanchez</h4>
                        </a>
                    </article>

                </div> */}
                {/* <div className='RightContainer'> */}

                    <div className='Subtitle'>
                        <h2>Contact Me</h2>
                    </div>

                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='Name' placeholder='Full Name' required />
                        <input type="email" name='email' placeholder='Email Address' required />
                        <textarea name='message' rows="7" placeholder='Your Message...' required />
                        <button type='submit' className='SubmissionButton' value="Send">Send</button>
                    </form>
                </div>
            {/* </div> */}
        </section>
        </>
    )
}

export default Contact