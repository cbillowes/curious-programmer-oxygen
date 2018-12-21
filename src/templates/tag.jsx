import React from "react"
import Helmet from "react-helmet"
import Gorget from "../components/Gorget/Component"
import PostListing from "../components/PostListing/Component"
import "../pages/page.css"
import config from "../../data/SiteConfig"

export default class TagTemplate extends React.Component {
  render() {
    const tag = this.props.pathContext.tag
    const postEdges = this.props.data.allMarkdownRemark.edges
    return (
      <div className="tag-container page-container">
        <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
        <Gorget title={config.siteTitle} section={tag} />
        <PostListing
          postEdges={postEdges}
          heading={`More ${tag}`}
          excludeTag={tag}
        />
      </div>
    )
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
