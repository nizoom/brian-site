import React from "react";

import "./navbtn.css"

const NavBtn = (props) => {
    return (
        <div>
            <button onClick = {props.clicked} className = "menu-btn"> Menu </button>

        </div>
    )
}

export default NavBtn;