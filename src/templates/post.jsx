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
import "./post.css"

const formatReadPost = value => ({
  path: value.fields.slug,
  title: value.frontmatter.title,
  cover: value.frontmatter.cover,
  blur: value.frontmatter.blur,
  custom: value.frontmatter.custom,
  date: value.frontmatter.date,
  excerpt: value.excerpt,
  timeToRead: value.timeToRead
})

export default class PostTemplate extends React.Component {
  componentDidMount() {
    window.onscroll = function() {
      const scrollTop = window.scrollY
      const opacity = scrollTop / 500
      const background = document.getElementById("post-background")
      if (background) {
        background.style.opacity = opacity
        background.style.filter = `alpha(opacity=${opacity * 10})`
      }
    }
  }

  render() {
    const { data } = this.props
    const { slug, next, prev } = this.props.pathContext
    const postNode = this.props.data.markdownRemark
    const post = postNode.frontmatter
    const getNextData = () => (next ? formatReadPost(data.next) : null)
    const getPrevData = () => (prev ? formatReadPost(data.prev) : null)
    const coverStyle = post.cover ? "cover" : "cover-less"
    const coverDisplay = post.cover ? "block" : "none"
    const coverBlur = post.blur ? post.blur : `${post.cover}&blur`

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
          <div
            className={coverStyle}
            style={{ backgroundImage: `url(${post.cover})` }}
          >
            <div
              id="post-background"
              className="cover-blur"
              style={{ backgroundImage: `url(${coverBlur}` }}
            />
            <div className="container">
              <div className="row">
                <div className="post-wrapper col-lg-11 col-md-11 mx-auto">
                  <ReadNext
                    prettify={false}
                    next={getNextData()}
                    prev={getPrevData()}
                  />
                  <UserInfo config={config} />
                  <h1>{post.title}</h1>
                  <PostMeta
                    date={post.date}
                    timeToRead={postNode.timeToRead}
                    orientation="left"
                  />
                  <PostTags tags={post.tags} />
                  <div
                    className="body"
                    dangerouslySetInnerHTML={{ __html: postNode.html }}
                  />
                  <SocialLinks postPath={slug} postNode={postNode} />
                  <p style={{ display: `${coverDisplay}` }}>
                    <strong>Cover image &hearts; </strong>
                    <a href={post.cover}>
                      {post.custom ? post.custom : post.cover}
                    </a>
                  </p>
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
        blur
        custom
        date
        category
        tags
      }
      fields {
        slug
      }
    }

    prev: markdownRemark(fields: { slug: { eq: $prev } }) {
      excerpt(pruneLength: 200)
      timeToRead
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
      excerpt(pruneLength: 200)
      timeToRead
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
