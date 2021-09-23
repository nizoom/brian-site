import React from "react";
import "./podcast.css"
import PodcastImg from "../../../images/chips.jpg"
import PodcastEpisode from "./podcastepisode";
const Podcast = () => {
    return (
        <div>
            <img src = {PodcastImg} alt = "Corner Convos and Chips Logo" className = "convos-logo"></img>
            <h3 className = "podcast-gen-description"> A cutting-edge football podcast where we discuss Europe's top five leagues</h3>
           
            <PodcastEpisode title = "All About Arsenal" embedurl = "https://www.youtube.com/embed/CM4WnwdNPK4"/>
            <PodcastEpisode title = "Transfers, Transfers, Transfers..." embedurl = "https://www.youtube.com/embed/BqLA22qB0RE"/>
            <PodcastEpisode title = "The European Super League" embedurl = "https://www.youtube.com/embed/OtbtA6w2k68"/>

        </div>
    )
}

export default Podcast;