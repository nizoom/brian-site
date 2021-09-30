import React, {useRef} from "react";
import SectionHeader from "./sectionheader/sectionheader";
import TopArticle from "./articles/toparticle";
import Article from "./articles/article";
import Podcast from "./podcasts/podcast.js";
import PhotographyDisplay from "./photography/photodisplay";
import "./content.css"

const Content = (props) => {
    //refs for scrolling to sections when navu menu is clicked 

    const articlesRef = useRef();
    const podcastRef = useRef();
    const photographyRef = useRef();

    //console.log(props.headerRef.current)
    //switch operator so that the window scrolls based on string from prop
    if(props.clickedSection !== ""){
        console.log(props.clickedSection)
        switch(props.clickedSection){
            case "articles":
                articlesRef.current.scrollIntoView(); 
                break;
            case "podcasts":
                podcastRef.current.scrollIntoView();
                break;
            case "photography":
                photographyRef.current.scrollIntoView();
                break;
            default: 
                console.log("failed to scroll")
                //props.headerRef.current.scrollIntoView(); // change this 
        }
    }
    return (
        <div>
            <section ref= {articlesRef}>
                <SectionHeader title = "Articles"/>
                <div className="article-layout"> 
                    <TopArticle className = "tile"/>
                    <Article className = "tile"/>
                    <Article className = "tile"/>
                </div>
            </section>

            <div ref = {podcastRef} className = "anchor"> </div>
            <section> 
                <SectionHeader title = "Podcasts"/>
                <Podcast/>
            </section>


            <div ref = {photographyRef} className = "anchor"> </div>
            <section className = "father">
                <SectionHeader title = "Photography"/>
                <PhotographyDisplay/>
            </section>
        </div>
    )
}

export default Content;