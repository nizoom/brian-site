import React from "react";
import "./photographydisplay.css";

const PhotographyDisplay = ( ) => {
    return (
        <div>
            <h3 className="photography-section-blurb"> Here are some photos I've taken during my journey avoiding the Round One.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, </h3>
            <div className="photo-display">
                <div className = "photo1" >Photo 1</div>
                <div className = "photo2" >Photo 2</div>
                <div className = "photo3"> Photo 3</div>
            </div>
        </div>
    )
}

export default PhotographyDisplay;