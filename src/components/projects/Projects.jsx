import React from 'react'
import Data from "./Data.jsx"; // File with JSON Array of projects
import Items from './Items';
import Tabs from './Tabs';
import Pagination from './Pagination.jsx';
import { useState } from "react";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Projects.css'

// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Projects(){
    //Create useState to get the projects from Data.jsx
    const [data, setData] = useState(Data);

    let currentWidth = window.innerWidth;
    let Items = 3;

    if(currentWidth <= 600)
    {
        Items = 1;
    }else if(window.innerWidth <= 1024)
    {
        Items = 2;
    }


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
                    
                    <div className="Project_pagination">
                        {/* <Items data={data} /> */}
                        <Pagination ItemsList={data} ItemsPerPage={Items} />
                    </div>                    
                </div>
        </section>
    </>
    )
}
export default Projects;

