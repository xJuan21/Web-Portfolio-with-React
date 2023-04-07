import React from 'react'
import './../../index.css'
import './Socials.css'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const Socials = () => {
    // const style = { color: "black", background: "" }
    return (
        <>
        <section className='SocialSection'>
            <div className='SocialContainer'>

                <div className='Social'>
                    <a href='https://github.com/xJuan21' target='_blank'>
                        <BsGithub className='Icon'/>                    
                    </a>
                </div>

                <div className='Social'>
                    <a href='https://www.linkedin.com/in/juan-mota-sanchez' target='_blank'>
                        <BsLinkedin className='Icon'/>
                    </a>
                </div>

                <div className='Social'>
                    <a href='https://twitter.com/0xJuan21' target='_blank'>
                        <BsTwitter className='Icon'/>
                    </a>
                </div>
            </div>
        </section>
        </>
    )
}

export default Socials