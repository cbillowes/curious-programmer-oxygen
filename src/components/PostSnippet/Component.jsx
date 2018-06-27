import React from "react"
import Link from "gatsby-link"
import Moment from "react-moment"
import PostTags from "../PostTags/Component"
import "./PostSnippet.css"

class PostSnippet extends React.Component {
  render() {
    const post = this.props.post
    const postDate = Date.parse(post.date, "YYYY-MM-dd")
    const excludeTag = this.props.excludeTag

    return (
      <div className="post-preview">
        <Link to={post.path} key={post.title}>
          <h2 className="post-title">
            {post.title}
          </h2>
          <h3 className="post-subtitle">
            {post.excerpt}
          </h3>
        </Link>
        <PostTags tags={post.tags} excludeTag={excludeTag} />
        <p className="post-meta">
          <Moment date={postDate} fromNow />
          {" on "}
          <Moment date={postDate} format="ddd, D MMMM YYYY" />
          {" "}
          (Est. {post.timeToRead} minute read)
        </p>
      </div>
    )
  }
}

export default PostSnippet
