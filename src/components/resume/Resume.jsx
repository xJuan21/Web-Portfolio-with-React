import React from 'react'
import './Resume.css'

const Resume = () => {

    // Function will execute on click of button
    const ResumeButtonOnClick = () => {
        // using Java Script method to get PDF file
        fetch('JuanMota_Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'JuanMota_Resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <div id='Resume' className='ResumeContainer'>

                <div className='Resume'>
                    {/* <a href="path_to_file" download="JuanMota_Resume.pdf"> */}
                        <button onClick={ResumeButtonOnClick}>Download Resume</button>
                    {/* </a> */}
                </div>
            </div>
        </>
    )
}

export default Resume