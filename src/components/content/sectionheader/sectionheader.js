import React from "react";
import "./sectionheader.css"

const SectionHeader = (props) => {
    return (
        <div className="section-header-wrapper">
            <h2 className = "section-header-h2"> {props.title} </h2>

        </div>
    )
}

export default SectionHeader;