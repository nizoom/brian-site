import React, {useRef} from "react";

import "./header.css"

import NavBtn from "./navbutton/navbtn";

const Header = ( props ) => {


    function handleMenuBtnClick(){ //triggers callback to app.js to change menu status
        window.scrollTo(0,0)
        props.callback()
    }

    function retrieveClickEvent(section){
        props.callback(section)
    }

    const headerRef = useRef();

    return (
        <div className = "header-wrapper" ref = {headerRef}>
            <header className="header-bar">

                {/* This element is for smaller screens */}
                
                <NavBtn clicked= {handleMenuBtnClick} btnStatus = {props.rootMenuStatus} />

                {/* This element is for desktop screens */}
                
                    <div className = "desktop-menu-wrapper"> 
                        <p className="desktop-menu-item" onClick = {() => retrieveClickEvent("articles")}> Articles </p>

                        <p className="desktop-menu-item" onClick = {()=> retrieveClickEvent("podcasts")}> Podcasts </p>

                        <p className="desktop-menu-item" onClick = {()=> retrieveClickEvent("photography")}> Photography </p>
                
                    </div>
          

                

               <em> <h1 className = "site-name"> Brian Sided </h1> </em>



               <div className = "invisible-element"></div>
            </header>

            
        </div>
    )
}

export default Header