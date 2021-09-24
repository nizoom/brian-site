import React from "react"

import "./navmenu.css"


const NavMenu = (props) => {

    // const [savedRefs, setsavedRefs] = useState("empty")

    // useEffect(() => {
    //     if(props.refs.length > 0){
    //         console.log(props.refs)
    //         const [articlesRef, podcastRef, photographyRef] = props.refs;
    //         setsavedRefs([articlesRef, podcastRef, photographyRef])

    //     }
    // }, [props.refs])

    
    // function executeScroll(scrollTo){
    //     scrollTo.scrollIntoView();
    // }

    function retrieveClickEvent(section){
        props.callback(section)
    }
    return (
        <div>

    
            <nav className = { props.menuStatus ? "nav-menu" : "closed"}>
                
                <ul className = "links-list">
                    <hr className = "horizontal-line"/>     
                    <li onClick={() => retrieveClickEvent("articles")}>
                        Articles
                       
                    </li> 
                    <hr className = "horizontal-line"/>   
                    <li onClick={()=> retrieveClickEvent("podcasts")}>
                        Podcasts
                    </li>      
                    <hr className = "horizontal-line"/>    
                    <li onClick={()=> retrieveClickEvent("photography")}>
                        Photography
                    </li>  
                    <hr className = "horizontal-line"/>             
                    
                     
                </ul>
            </nav>  
            
        
        </div>
    )
}

export default NavMenu