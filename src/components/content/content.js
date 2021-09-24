import React, {useRef,useEffect} from "react";
import SectionHeader from "./sectionheader/sectionheader";
import TopArticle from "./articles/toparticle";
import Article from "./articles/article";
import Podcast from "./podcasts/podcast.js";
import PhotographyDisplay from "./photography/photodisplay";
const Content = (props) => {
    const articlesRef = useRef();
    const podcastRef = useRef();
    const photographyRef = useRef();

    function sendRefsToRoot(){
        props.retrieveRefs(articlesRef.current, podcastRef.current, photographyRef.current)
    }

    useEffect(() => {
        sendRefsToRoot()
    })
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