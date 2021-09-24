import React, {useState} from "react";

import "./header.css"


import NavBtn from "./navbutton/navbtn";

const Header = ( props ) => {

    const [activateMenu, setActiveMenu] = useState(true);

    function handleMenuBtnClick(){
        // console.log("Menu Clicked!")
        setActiveMenu(!activateMenu)
        props.callback(activateMenu)
    }
    return (
        <div>
            <header className="header-bar">
                <NavBtn clicked= {handleMenuBtnClick} btnStatus = {activateMenu}/>

               <em> <h1 className = "site-name"> Brian Sided </h1> </em>
               <div className = "invisible-element"></div>
            </header>

            {/* <h2 className = {activateMenu ? "site-intro" : "closed"}> 
                Hi My names Brian and I Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            </h2> */}
        </div>
    )
}

export default Header