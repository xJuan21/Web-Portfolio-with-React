import React from 'react'
import PDF from './JuanMota_Resume.pdf'
import './Resume.css'

const Resume = () => {

    // Function will execute on click of button
    // const ResumeButtonOnClick = () => {
    //     // using Java Script method to get PDF file
    //     fetch('JuanMota_Resume.pdf').then(response => {
    //         response.blob().then(blob => {
    //             // Creating new object of PDF file
    //             const fileURL = window.URL.createObjectURL(blob);
    //             // Setting various property values
    //             const alink = document.createElement('a');
    //             alink.href = fileURL;
    //             alink.download = 'JuanMota_Resume.pdf';
    //             alink.click();
    //         })
    //     })
    // }
    return (
        <>
            <section className='ResumeSection'>
                <div id='Resume' className='ResumeContainer'>

                    <div className='Resume'>
                        <a href={PDF} download="JuanMota_Resume.pdf">
                            <button value="download">Download Resume</button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Resume