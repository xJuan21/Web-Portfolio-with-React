import React from 'react'
import ProfilePic from './Profile.png'
import './Slider.css'
import './../../index.css'
// import './settings.css'

const Slider = () => {
    return (
        <>
            <section id="News" class="slider_01">
                <div class="rev_slider_wrapper">
                    <ul>
                            <li>
                                <div className="HeaderContent">
                                    <div class="ImageSection">
                                        <img src={ProfilePic} alt="Profile Picture" ></img>
                                    </div>
                                    <div class="TextArea">
                                        <h2><strong>Portfolio 2.0</strong></h2>
                                        
                                        Some text here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Etiam arcu erat, faucibus ut odio a, pellentesque euismod velit.
                                        
                                    </div>
                                </div>
                        </li>
                    </ul>
                </div>
                <svg preserveAspectRatio="none" viewBox="0 0 100 100"><polygon points="0 100, 100 100, 0 0,100" opacity="1"></polygon></svg>
            </section> 
        </>
    )
}

export default Slider