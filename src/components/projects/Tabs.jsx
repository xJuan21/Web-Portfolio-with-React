function Tabs({filterCategory, tabsData}){
    return(
        <>
            {
            tabsData.map((category, index)=>{
                return (
                    <>
                        <ul className='CategoriesList'>
                            <li>
                            <button type="button" className="Category" onClick={()=> filterCategory(category[0])} key={index}>
                                {category[0]}
                            </button>
                            </li>
                        </ul>
                    </>
                )
            })
            }
        </>
    )
}
export default Tabs;