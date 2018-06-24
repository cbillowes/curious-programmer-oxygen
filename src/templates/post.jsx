import React from "react"
import Helmet from "react-helmet"
import UserInfo from "../components/UserInfo/Component"
import Disqus from "../components/Disqus/Component"
import PostTags from "../components/PostTags/Component"
import SocialLinks from "../components/SocialLinks/Component"
import SEO from "../components/SEO/Component"
import ReadNext from "../components/ReadNext/Component"
import config from "../../data/SiteConfig"
import "./prism-default.css"
import "./prism-default.js"
import "./post.css"

const formatReadPost = value => ({
  path: value.fields.slug,
  title: value.frontmatter.title,
  cover: value.frontmatter.cover,
  excerpt: value.excerpt
})

export default class PostTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { slug, next, prev } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark
    const post = postNode.frontmatter
    const getNextData = () => (next ? formatReadPost(data.next) : null);
    const getPrevData = () => (prev ? formatReadPost(data.prev) : null);

    if (!post.id) {
      post.id = slug
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID
    }
    return (
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div className="post">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <ReadNext next={getNextData()} prev={getPrevData()} />
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
                <div className="post-meta">
                  <PostTags tags={post.tags} />
                  <SocialLinks postPath={slug} postNode={postNode} />
                </div>
                <ReadNext next={getNextData()} prev={getPrevData()} />
                <UserInfo config={config} />
                <Disqus postNode={postNode} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $next: String, $prev: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
      }
    }

    prev: markdownRemark(fields: { slug: { eq: $prev } }) {
      excerpt(pruneLength: 112)
      frontmatter {
        title
        cover
        date
      }
      fields {
        slug
      }
    }

    next: markdownRemark(fields: { slug: { eq: $next } }) {
      excerpt(pruneLength: 112)
      frontmatter {
        title
        cover
        date
      }
      fields {
        slug
      }
    }

  }
`
