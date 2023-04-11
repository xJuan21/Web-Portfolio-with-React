import React from 'react'
import './../../index.css'
import './About.css'
import Venezuela from './venezuela-flag-round-icon-32.png'
import {ImHome} from 'react-icons/im'
import {GiVenezuela} from 'react-icons/gi'
import {FaGraduationCap} from 'react-icons/fa'
import {BiCodeAlt} from 'react-icons/bi'


const About = () => {
    return (
        <>
        <section className='AboutSection'>
            <div id="About" className='AboutHeader'>
                <h2>About Me</h2>

                <div className='HeaderText'>
                    Learn about my Life, Education, Experience, and More!  
                </div>

                <div className='AboutContent'>

                    <div className='GetToKnow'>
                        <h3>Get To Know Me</h3>

                        <div className='GetToKnowText'>

                            {/* <div className='LeftIcon'>
                                <ImHome size={'65px'}/> &nbsp;&nbsp;&nbsp;&nbsp;
                                <GiVenezuela size={'65px'}/>
                            </div> */}
                            
                            

                            {/* <div className="RightText">
                                Originally from Venezuela. <img src={Venezuela}></img><br/>
                            </div> */}

                            <div className='LeftIcon'>
                                <FaGraduationCap size={'65px'}/> 
                            </div>

                            <div className="RightText">
                                Senior Student @ Lindenwood University🦁. <br/>
                                B.S. in Computer Science & Minor in Web Design and UX
                                Graduating in May 2023 🗓️. <br/>
                            </div>

                            <div className='LeftIcon'>
                                <BiCodeAlt size={'65px'}/> 
                            </div>

                            <div className="RightText">
                                I enjoy exploring new technologies and experimenting with 
                                different programming languages and frameworks. 
                                {/* Staying curious and open-minded is critical 
                                to being a successful software developer.     */}
                            </div>
                            
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
                            <div className='Skill'> .NET</div>
                            <div className='Skill'> Laravel</div>
                            <div className='Skill'> ReactJS</div>
                            <div className='Skill'> Node.Js</div>
                            <div className='Skill'> GitHub</div>
                            <div className='Skill'> Linux/Bash</div>
                            <div className='Skill'> Figma</div>
                            <div className='Skill'> UI/UX</div>
                            <div className='Skill'> Agile/Scrum</div>
                            <div className='Skill'> Excel</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}

export default About