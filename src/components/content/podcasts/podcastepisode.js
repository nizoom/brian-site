import React from "react";
import "./podcast.css"

const PodcastEpisode = (props) => {
    return(
        <div>
            <h4 className = "podcast-episode-title"> {props.title} </h4>
            <iframe className = "video-player"
            src= {props.embedurl}
             title="YouTube video player" frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowFullScreen></iframe>
        </div>
    )
}

export default PodcastEpisode;