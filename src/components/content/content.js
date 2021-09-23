import React from "react";
import SectionHeader from "./sectionheader/sectionheader";
import TopArticle from "./articles/toparticle";
import Article from "./articles/article";
import Podcast from "./podcasts/podcast.js";
import PhotographyDisplay from "./photography/photodisplay";
const Content = () => {
    return (
        <div>
            <section>
                <SectionHeader title = "Articles Section"/>
                <TopArticle/>
                <Article/>
                <Article/>
            </section>

            <section> 
                <SectionHeader title = "Podcasts"/>
                <Podcast/>
            </section>
            <section>
                <SectionHeader title = "Photography"/>
                <PhotographyDisplay/>
            </section>
        </div>
    )
}

export default Content;