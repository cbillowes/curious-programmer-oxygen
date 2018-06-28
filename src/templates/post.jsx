import React from "react"
import Helmet from "react-helmet"
import UserInfo from "../components/UserInfo/Component"
import Disqus from "../components/Disqus/Component"
import PostTags from "../components/PostTags/Component"
import SocialLinks from "../components/SocialLinks/Component"
import SEO from "../components/SEO/Component"
import ReadNext from "../components/ReadNext/Component"
import Gorget from "../components/Gorget/Component"
import PostMeta from "../components/PostMeta/Component"
import config from "../../data/SiteConfig"
import "./prism-default.css"
import "./prism-default.js"
import "./post.css"
import "./post.js"

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
    const coverStyle = (post.cover) ? "cover" : ""

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
        <Gorget title={config.siteTitle} />
        <div id="post">
          <div className={coverStyle} style={{ backgroundImage: `url(${post.cover})` }}>
            <div id="post-background" className="background" style={{ backgroundImage: `url(${post.cover}&blur)` }}></div>
            <div className="container">
              <div className="row">
                <div className="post-wrapper col-lg-11 col-md-11 mx-auto">
                  <ReadNext prettify={false} next={getNextData()} prev={getPrevData()} />
                  <UserInfo config={config} />
                  <h1>{post.title}</h1>
                  <PostMeta date={post.date} timeToRead={postNode.timeToRead} orientation="left" />
                  <div className="body" dangerouslySetInnerHTML={{ __html: postNode.html }} />
                  <div className="post-meta">
                    <PostTags tags={post.tags} />
                    <SocialLinks postPath={slug} postNode={postNode} />
                  </div>
                  <Disqus postNode={postNode} />
                </div>
              </div>
            </div>
          </div>
          <ReadNext prettify={true} next={getNextData()} prev={getPrevData()} />
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
