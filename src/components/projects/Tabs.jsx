function Tabs({filterCategory, tabsData}){
    return(
        <>
            {
            tabsData.map((category, index)=>{
                return (
                    <>
                        <ul className='CategoriesList'>
                            <li>
                            <button type="button" className="Category" onClick={()=> filterCategory(category)} key={index}>
                                {category}
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