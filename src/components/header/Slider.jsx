import React from 'react'
import ProfilePic from './Portrait.png'
import './Slider.css'
import './../../index.css'
// import './settings.css'

const Slider = () => {
    return (
        <>
            <section id="News" class="slider_01">
                {/* <div class="rev_slider_wrapper"> */}
                    {/* <ul> */}
                            {/* <li> */}
                                {/* <div className="HeaderContent"> */}
                                    <div class="ImageSection">
                                        <img src={ProfilePic} alt="Profile Picture" ></img>
                                    </div>
                                    <div class="TextArea">
                                        <h2>Hey, I'm Juan!</h2>
                                        
                                        I'm a Full Stack Software Developer 🧑🏻‍💻<br />
                                        Welcome to my Web Portfolio!📓<br />
                                        Here, you will find the latest updates on my career☕<br />
                                        and different ways to contact me📲.
                                        
                                    </div>
                                {/* </div> */}
                        {/* </li> */}
                    {/* </ul> */}
                {/* </div> */}
                <svg preserveAspectRatio="none" viewBox="0 0 100 100"><polygon points="0 100, 100 100, 0 0,100" opacity="1"></polygon></svg>
            </section> 
        </>
    )
}

export default Slider