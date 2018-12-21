import React from "react"
import Helmet from "react-helmet"
import Gorget from "../components/Gorget/Component"
import Credit from "../components/Credit/Component"
import config from "../../data/SiteConfig"
import "./page.css"

class Credits extends React.Component {
  render() {
    return (
      <div className="index-container">
        <Helmet title={`Credits | ${config.siteTitle}`} />
        <Gorget title={config.siteTitle} section="Home" />
        <div className="container page-container credits-container">
          <div className="row">
            <div className="col-lg-9 col-md-9 mx-auto">
              <h1>Credits</h1>
              <section>
                <h1>Icons</h1>
                <Credit
                  linkTo="https://www.flaticon.com/authors/egor-rumyantsev"
                  linkText="www.flaticon.com"
                  description="Musica Searcher search icon made by Egor Rumyantsev."
                />
                <Credit
                  linkTo="https://www.flaticon.com/authors/those-icons"
                  linkText="www.flaticon.com"
                  description="Menu icon made by those icons."
                />
              </section>
              <section>
                <h1>Code</h1>
                <Credit
                  linkTo="https://www.gatsbyjs.org/"
                  linkText="gatsbyjs.org"
                  description="Gatsby lets you build blazing fast sites with your data, whatever the source. Liberate your sites from legacy CMSs and fly into the future." />
                <Credit
                  linkTo="https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/"
                  linkText="gatsby-remark-prismjs"
                  description="Adds syntax highlighting to code blocks in markdown files using PrismJS." />
                <Credit
                  linkTo="https://www.gatsbyjs.org/packages/gatsby-remark-embed-gist/"
                  linkText="gatsby-remark-embed-gist"
                  description="This plugin allows content authors to embed Gist snippets." />
                <Credit
                  linkTo="https://www.gatsbyjs.org/packages/gatsby-remark-embed-youtube/"
                  linkText="gatsby-remark-embed-youtube"
                  description="Embed a Youtube Video in your Markdown." />
              </section>
              <section>
                <h1>Photography</h1>
                <Credit
                  linkTo="https://picsum.photos"
                  linkText="picsum.photos"
                  description="Lorem Ipsum... but for photos." />
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Credits
