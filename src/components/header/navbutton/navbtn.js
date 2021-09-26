import React from "react";

import "./navbtn.css"

import BurgerIcon from "../../../images/burger.png"

const NavBtn = (props) => {
    //depending on btn status this component will either show burger icon or X icon to close the menu
    return (
        <div className = "menu-btn-wrapper">
            
           {!props.btnStatus?  
            <img src = {BurgerIcon} alt = "burger-icon"  className = "burger-icon" 
            onClick = {props.clicked}/> 
            : 

            <div className="close-menu-btn" onClick = {props.clicked} > 
                X
            </div>
            
            }

     
        </div>
    )
}

export default NavBtn;