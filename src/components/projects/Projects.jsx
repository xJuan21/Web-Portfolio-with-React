import React from 'react'
import Data from "./Data.jsx"; // File with JSON Array of projects
import Items from './Items';
import Tabs from './Tabs';
import { useState } from "react";
import './Projects.css'

// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Projects(){
    //Create useState to get the projects from Data.jsx
    const [data, setData] = useState(Data);

    //Extract the 'category' value(s) for each index in Data
    const categoryData = Data.map((value)=>{
          return value.category
     });

    //Create a Set that will take care of duplicates in JSON
    const categorySet = () => {

        //Empty Set for now
        let noDuplicates = new Set();

        //Populate 'noDuplicates' with values found in categoryData 2D Array
        for(var i=0; i<categoryData.length; i++)
        {
            //Iterate through each slot in 'category' array
            for(var j=0; j<categoryData[i].length; j++)
            {
                //console.log(categoryData);
                //If current element is not found in noDuplicates Set, add it.
                if(!noDuplicates.has(categoryData[i][j]))
                {
                    noDuplicates.add(categoryData[i][j]);
                }
            }
        }
        //Finally, return noDuplicates Set without Duplicates
        return noDuplicates;
    }

    //Create an array of strings which will represent each 'Tab'
    //Merge Set of Categories found in Data.jsx without duplicates.
    const tabsData= ["All", ...categorySet()];
    //console.log(tabsData);
    
    //Function to be used when one of the tabs is clicked.
    //Main purpose is to select each Project that contains the same Category.
    // For Example: Display only projects that were written on C++.
    const filterCategory=(category) =>{

        //If Tab "All" is pressed, Display them all
        if(category=="All")
        {
            setData(Data);//Set Current vaue of data to its default value (Not filtered)
            return;
        }
    
        //Used to display specific items (Projects) that make part of the specific category
       const filteredData =  Data.filter((value)=>
       {
        for(var i=0; i<Data.length; i++)
        {
            //Iterate through each slot in 'category' array
            for(var j=0; j<categoryData[i].length; j++)
            {
                if(value.category[j] == category)
                {
                    console.log(value.category[j]);
                   return value.category[j] == category;
                }
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

