import React, {useEffect, useState} from "react"

import "./navmenu.css"


const NavMenu = (props) => {

    const [savedRefs, setsavedRefs] = useState("empty")

    useEffect(() => {
        if(props.refs.length > 0){
            console.log(props.refs)
            const [articlesRef, podcastRef, photographyRef] = props.refs;
            setsavedRefs([articlesRef, podcastRef, photographyRef])

        }
    }, [props.refs])

    
    function executeScroll(scrollTo){
        scrollTo.scrollIntoView();
    }
    return (
        <div>

            {savedRefs !== "empty" ?
            <nav className = { props.menuStatus ? "nav-menu" : "closed"}>
                
                <ul className = "links-list">
                    <hr className = "horizontal-line"/>     
                    <li onClick={executeScroll(savedRefs[0])}>
                        Articles
                       
                    </li> 
                    <hr className = "horizontal-line"/>   
                    <li onClick={executeScroll(savedRefs[1])}>
                        Podcasts
                    </li>      
                    <hr className = "horizontal-line"/>    
                    <li onClick={executeScroll(savedRefs[2])}>
                        Photography
                    </li>  
                    <hr className = "horizontal-line"/>             
                    
                     
                </ul>
            </nav>  
            : null
            }
        </div>
    )
}

export default NavMenu