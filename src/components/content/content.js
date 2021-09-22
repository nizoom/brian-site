import React from "react";
import SectionHeader from "./sectionheader/sectionheader";
import TopArticle from "./articles/toparticle";
import Article from "./articles/article";

const Content = () => {
    return (
        <div>
            <section>
            <SectionHeader title = "Articles Section"/>
            <TopArticle/>
            <Article/>
            <Article/>
            </section>
        </div>
    )
}

export default Content;