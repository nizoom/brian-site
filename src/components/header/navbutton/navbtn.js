import React from "react";

import "./navbtn.css"

import BurgerIcon from "../../../images/burger.png"

const NavBtn = (props) => {
    return (
        <div>
            
            <img src = {BurgerIcon} alt = "burger-icon"  className = "burger-icon" 
            onClick = {props.clicked}/>
         
     
        </div>
    )
}

export default NavBtn;