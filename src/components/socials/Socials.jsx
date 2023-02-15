import React from 'react'
import './../../index.css'
import './Socials.css'

const Socials = () => {
    return (
        <>
            <div className='SocialContainer'>

                <div className='Social'>
                    <a href='https://github.com/xJuan21' target='_blank'>
                        <img src={require('./icons/github_black.png')} alt="GitHub" ></img>
                    </a>
                </div>

                <div className='Social'>
                    <a href='https://www.linkedin.com/in/juan-mota-sanchez' target='_blank'>
                        <img src={require('./icons/linkedin_black.png')} alt="LinkedIn" ></img>
                    </a>
                </div>

                <div className='Social'>
                    <a href='https://twitter.com/0xJuan21' target='_blank'>
                        <img src={require('./icons/twitter_black.png')} alt="Twitter" ></img>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Socials