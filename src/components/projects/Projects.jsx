import React from 'react'
import './Projects.css'

const Projects = () => {
    return (
        <>
            <section id="ProjectSection">
                <div className='ProjectContainer'>
                    <h2>Projects</h2>
                    <ul className='CategoriesList'>
                        <li className='Category'> All</li>
                        <li className='Category'> C++</li>
                        <li className='Category'> Java</li>
                        <li className='Category'> SQL</li>
                        <li className='Category'> Javascript</li>
                        <li className='Category'> Frontend</li>
                        <li className='Category'> Backend</li>
                        <li className='Category'> Data Structures</li>
                        <li className='Category'> Algorithms</li>
                        <li className='Category'> Figma</li>
                        <li className='Category'> Others</li>
                        {/* <li className='Category'> C#</li> */}
                        {/* <li className='Category'> Linux/Bash</li> */}
                        {/* <li className='Category'> Figma</li> */}
                        {/* <li className='Category'> UI/UX</li> */}
                        {/* <li className='Category'> Scrum</li> */}
                    </ul>
                    <div className='carousel'>
                        <div className='carousel-controls'>
                            <input
                                id="1"
                                type="radio"
                                name="controls"
                                checked
                            />
                            <input id="2" type="radio" name="controls" />
                            <input id="3" type="radio" name="controls" />

                            <div className='dots'>
                                <label for="1"/>
                                <label for="2"/>
                                <label for="3"/>
                            </div>
                            <div className='carousel-images'>
                                {/* Empty for now */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects