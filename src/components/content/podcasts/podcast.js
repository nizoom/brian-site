import React from "react";
import "./podcast.css"
import PodcastImg from "../../../images/chips.jpg"
import PodcastEpisode from "./podcastepisode";
const Podcast = () => {
    return (
        <div className = "podcast-section-wrapper">
            
            <img src = {PodcastImg} alt = "Corner Convos and Chips Logo" className = "convos-logo"></img>

            {/* <div className = "promos">  */}
                    <div className="socials-wrapper"> 
                        <p className="follow"> Follow us on: </p>
                        <a href = "https://www.instagram.com/cornerflag_convos/" target="_blank" rel="noopener noreferrer nofollow">
                            <img src="https://www.transparentpng.com/thumb/logo-instagram/JFyofc-logo-instagram-background-png.png" 
                            alt="Link to instagram" className = "ig-button"/>
                        </a>

                        <a href = "https://www.youtube.com/channel/UCicOo6NqrPy_jBzUsfTuikQ" target="_blank" rel="noopener noreferrer nofollow">
                            <img src="https://www.transparentpng.com/thumb/youtube-logo/transparent-youtube-logo-clipart-6.png"
                            alt="Transparent Youtube Logo Clipart @transparentpng.com" className = "youtube-btn"/>
                        </a>
                    </div> 
                <h3 className = "podcast-gen-description"> A cutting-edge football podcast where we discuss Europe's top five leagues. 
                <span className = "pod-call-to-action"> Check out our latest episodes:</span> </h3>
            {/* </div> */}
            <div className = "podcast-episode-wrapper"> 
                <PodcastEpisode title = "All About Arsenal" embedurl = "https://www.youtube.com/embed/CM4WnwdNPK4"/>
                <PodcastEpisode title = "Transfers, Transfers, Transfers..." embedurl = "https://www.youtube.com/embed/BqLA22qB0RE"/>
                <PodcastEpisode title = "The European Super League" embedurl = "https://www.youtube.com/embed/OtbtA6w2k68"/>
                <PodcastEpisode title = "January Transfer Window Speculation" embedurl = "https://www.youtube.com/embed/nPPJZv27fNU"/>
            </div>
        </div>
    )
}

export default Podcast;