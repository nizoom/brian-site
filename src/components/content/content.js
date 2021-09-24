import React, {useRef} from "react";
import SectionHeader from "./sectionheader/sectionheader";
import TopArticle from "./articles/toparticle";
import Article from "./articles/article";
import Podcast from "./podcasts/podcast.js";
import PhotographyDisplay from "./photography/photodisplay";
const Content = (props) => {
    const articlesRef = useRef();
    const podcastRef = useRef();
    const photographyRef = useRef();


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
                props.headerRef.current.scrollIntoView();
        }
    }
    return (
        <div>
            <section ref= {articlesRef}>
                <SectionHeader title = "Articles Section"/>
                <TopArticle/>
                <Article/>
                <Article/>
            </section>

            <section ref = {podcastRef}> 
                <SectionHeader title = "Podcasts"/>
                <Podcast/>
            </section>
            <section ref = {photographyRef}>
                <SectionHeader title = "Photography"/>
                <PhotographyDisplay/>
            </section>
        </div>
    )
}

export default Content;