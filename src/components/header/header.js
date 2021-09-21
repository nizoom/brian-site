import React from "react";

import "./header.css"


import NavBtn from "./navbutton/navbtn";

const Header = ( ) => {

    function handleMenuBtnClick(){
        console.log("Menu Clicked!")
    }
    return (
        <div>
            <header className="header-bar">
                <NavBtn clicked= {handleMenuBtnClick}/>

               <em> <h1 className = "site-name"> Brian Sided </h1> </em>
               <div className = "invisible-element"></div>
            </header>
        </div>
    )
}

export default Header