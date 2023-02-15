import React from 'react'
import './../../index.css'
import './About.css'

const About = () => {
    return (
        <>
            <div id="About" className='AboutHeader'>
                <h2>About Me</h2>

                <div className='HeaderText'>
                    Some text here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Etiam arcu erat, faucibus ut odio a, pellentesque euismod velit. 
                </div>

                <div className='AboutContent'>

                    <div className='GetToKnow'>
                        <h3>Get To Know Me</h3>

                        <div className='GetToKnowText'>
                        Some text here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Etiam arcu erat, faucibus ut odio a, pellentesque euismod velit. 
                        </div>
                    </div>

                    <div className='SkillSet'>
                        <h3>Skillset</h3>
                        <div className='SkillsContainer'>
                            <div className='Skill'> C++</div>
                            <div className='Skill'> Java</div>
                            <div className='Skill'> SQL</div>
                            <div className='Skill'> Html/CSS</div>
                            <div className='Skill'> PHP</div>
                            <div className='Skill'> JavaScript</div>
                            <div className='Skill'> Kotlin</div>
                            <div className='Skill'> C#</div>
                            <div className='Skill'> React</div>
                            <div className='Skill'> GitHub</div>
                            <div className='Skill'> Linux/Bash</div>
                            <div className='Skill'> Figma</div>
                            <div className='Skill'> UI/UX</div>
                            <div className='Skill'> Scrum</div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default About