function Items({data}){
    return (
        <div className='ProjectsList'>
        {
            data.map((value) => {
                const {id, image, platform, language, title, github, description} = value;
                return (
                    <article key={id} className='Project_item'>

                        <div className="Project_item-image"> 
                            <img src={image} alt={title} />
                        </div>

                        <div className='ProjectSubtitle'>
                            <h3> 
                                {title}
                            </h3>
                            {/* <div className='GitHubImg'></div> */}
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
    )
}
export default Items;