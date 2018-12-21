import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import Gorget from "../components/Gorget/Component"
import config from "../../data/SiteConfig"
import "./page.css"
const _ = require("lodash")

export default class TagsTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: this.getTags()
    }
  }

  getTags = () => {
    let data = this.props.data.allMarkdownRemark.edges
      .map(item => item.node.frontmatter)
      .map(item => item.tags)
    let tagCollection = data.map(item => (!item ? [] : item))
    let tags = []
    for (let i = 0; i < tagCollection.length; i++) {
      for (let j = 0; j < tagCollection[i].length; j++) {
        let tag = tagCollection[i][j]
        if (!_.includes(tags, tag)) tags.push(tag)
      }
    }
    return tags.sort()
  }

  render() {
    return (
      <div>
        <Helmet title={`Tags | ${config.siteTitle}]`} />
        <Gorget title={config.siteTitle} section="Tags" />
        <div className="tags-container page-container container">
          <div className="row">
            <div className="col-lg-9 col-md-9 mx-auto">
              <h1>Tags</h1>
              {this.state.tags.map(item => (
                <Link
                  key={Math.random() * this.state.tags.length}
                  className="button badge badge-light"
                  to={`/tags/${_.kebabCase(item)}`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query TagsPage {
    allMarkdownRemark(limit: 1000) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            tags
          }
        }
      }
    }
  }
`
