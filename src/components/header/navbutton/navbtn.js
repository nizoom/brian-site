import React from "react";

import "./navbtn.css"

import BurgerIcon from "../../../images/burger.png"

const NavBtn = (props) => {
    return (
        <div>
            
           {props.btnStatus?  
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