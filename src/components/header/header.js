import React, {useRef} from "react";

import "./header.css"

import NavBtn from "./navbutton/navbtn";

const Header = ( props ) => {


    function handleMenuBtnClick(){ //triggers callback to app.js to change menu status
        window.scrollTo(0,0)
        props.callback()
    }

    const headerRef = useRef();

    return (
        <div className = "header-wrapper" ref = {headerRef}>
            <header className="header-bar">
                <NavBtn clicked= {handleMenuBtnClick} btnStatus = {props.rootMenuStatus} />

               <em> <h1 className = "site-name"> Brian Sided </h1> </em>
               <div className = "invisible-element"></div>
            </header>

            
        </div>
    )
}

export default Header