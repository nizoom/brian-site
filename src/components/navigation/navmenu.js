import React from "react"

import "./navmenu.css"


const NavMenu = (props) => {

    function retrieveClickEvent(section){ //sends back string representing click event to app.js. 
        //The string represents which section of the site the user wants to view
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