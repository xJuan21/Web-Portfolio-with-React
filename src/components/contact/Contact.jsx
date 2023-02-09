import React from 'react'
import './Contact.css'
// import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {
    return (
        <>
            <div className='ContactContainer'>
                <div className='LeftContainer'>
                    <article className='ContactOption'>
                    {/* <img src={require('./Rectangle.png')} alt="ContactImg" ></img> */}
                        {/* <MdOutlineEmail/> */}
                        <h3>Email</h3>
                        <h4>juanmotasanchez1@gmail.com</h4>
                        <a href='mailto:juanmotasanchez1@gmail.com'>Send a Message</a>
                    </article>
                    <article className='ContactOption'>
                    {/* <img src={require('./Rectangle.png')} alt="ContactImg" ></img> */}
                        {/* <MdOutlineEmail/> */}
                        <h3>WhatsApp</h3>
                        <h4>+1 (636) 219-8733</h4>
                        <a href='https://api.whatsapp.com/send?phone=16362198733'>Send a Message</a>
                    </article>
                    <article className='ContactOption'>
                    {/* <img src={require('./Rectangle.png')} alt="ContactImg" ></img> */}
                        {/* <MdOutlineEmail/> */}
                        <h3>LinkedIn</h3>
                        <h4>Pecheche.com</h4>
                        <a href='https://api.whatsapp.com/send?phone=16362198733'>Send a Message</a>
                    </article>
                </div>
                <div className='RightContainer'>
                    <div className='Subtitle'>
                        <h2>Contact Me</h2>
                    </div>
                    <form action=''>
                        <input type="text" name='Name' placeholder='Full Name' required />
                        <input type="email" name='email' placeholder='Email Address' required />
                        <textarea name='message' rows="7" placeholder='Your Message...' required />
                        <button type='submit' className='SubmissionButton'>Send Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact