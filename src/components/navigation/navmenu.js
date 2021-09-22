import React, {useEffect} from "react"

import "./navmenu.css"


const NavMenu = (props) => {

    useEffect(() => {
        // console.log(props.menuStatus)
    }, [props.menuStatus])
    
    return (
        <div>
            <nav className = { props.menuStatus ? "nav-menu" : "closed"}>
                
                <ul className = "links-list">
                    <hr className = "horizontal-line"/>     
                    <li>
                        Articles
                       
                    </li> 
                    <hr className = "horizontal-line"/>         
                    <li>
                        Photography
                    </li>  
                    <hr className = "horizontal-line"/>             
                    <li>
                        Podcasts
                    </li>
                    <hr className = "horizontal-line"/>     
                </ul>
            </nav>   
        </div>
    )
}

export default NavMenu