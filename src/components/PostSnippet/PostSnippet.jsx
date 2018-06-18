import React from "react"
import Link from "gatsby-link"
import Moment from "react-moment"
import "./PostSnippet.css"

class PostSnippet extends React.Component {
  render() {
    const post = this.props.post
    const postDate = Date.parse(post.date, "YYYY-MM-dd")

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
        <p className="post-meta">
          <Moment date={postDate} fromNow ago />
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
