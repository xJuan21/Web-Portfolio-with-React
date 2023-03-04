import React from 'react'
import Data from "./Data.jsx";
import Items from './Items';
import Tabs from './Tabs';
import { useState } from "react";
import './Projects.css'

// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Projects(){
    const [data, setData] = useState(Data);
    const categoryData = Data.map((value)=>{
          return value.category
     });
    const tabsData= [["All"], ...new Set(categoryData)];
    
    const filterCategory=(category) =>{
        if(category=="All"){
            setData(Data);
            return;
        }
       const filteredData =  Data.filter((value)=>{
        for(var i=0; i<value.category.length; i++)
        {
            if(value.category[i] == category)
            {
                return value.category == category;
            }else
            {
                setData(Data);
                return;
            }
        }
           
       })
       setData(filteredData);
    }
    return(
        <>
        <section className='ProjectSection'>
            <div className='ProjectContainer'>
                <h2>Projects</h2>
                
                <div className="ProjectMenu">
                    <Tabs filterCategory={filterCategory} tabsData={tabsData}/>
                </div>
                
                <Items data={data} />
            
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
                            </div>
                        </div>
                </div>
            </div>
       </section>
    </>
    )
}
export default Projects;

{/*const Projects = () => {
    return (
        <>
            <section className="ProjectSection">
                <div className='ProjectContainer'>
                    <h2>Projects</h2>
                    <div className="ProjectMenu">
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
                            <li className='Category'> Linux/Bash</li>
                            <li className='Category'> Others</li>
                        </ul>
                    </div>

                     <div className='ProjectsList'>
                        {
                            data.map(({id, image, platform, language, title, github, description}) => {
                                return (
                                    <article key={id} className='Project_item'>

                                        <div className="Project_item-image"> 
                                            <img src={image} alt={title} />
                                        </div>

                                        <div className='ProjectSubtitle'>
                                            <h3> 
                                                {title}
                                            </h3>
                                            <div className="ToolsUsed">
                                                <a href={github} target='_blank'>
                                                    <div className='GitHubImg'></div>
                                                </a>
                                                <img src={platform} alt="" />
                                                <img src={language} alt="" />
                                            </div>
                                        </div>
                                        <div className="ProjectDescription">{description}</div>
                                    </article>
                                )
                            })
                        }
                        
                    </div> 

                    
                </div>
            </section>
        </>
    )
}*/}

