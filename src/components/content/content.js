import React from "react";
import SectionHeader from "./sectionheader/sectionheader";
import TopArticle from "./articles/toparticle";
import Article from "./articles/article";
import Podcast from "./podcasts/podcast.js";

const Content = () => {
    return (
        <div>
            <section>
            <SectionHeader title = "Articles Section"/>
            <TopArticle/>
            <Article/>
            <Article/>
            </section>

            <SectionHeader title = "Podcasts"/>
            <Podcast/>
        </div>
    )
}

export default Content;