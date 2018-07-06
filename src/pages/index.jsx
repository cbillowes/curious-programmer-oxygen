import React from "react"
import Helmet from "react-helmet"
import Gorget from "../components/Gorget/Component"
import PostListing from "../components/PostListing/Component"
import SEO from "../components/SEO/Component"
import config from "../../data/SiteConfig"

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <Gorget title={config.siteTitle} section="Home" />
        <PostListing postEdges={postEdges} />
      </div>
    )
  }
}

export default Index

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
            date
          }
        }
      }
    }
  }
`
