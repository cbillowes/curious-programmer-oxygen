import React from "react"
import Link from "gatsby-link"
import Moment from "react-moment"
import "./PostSnippet.css"

class PostSnippet extends React.Component {
  render() {
    var post = this.props.post

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
          Posted{" "}
          <Moment date={post.date} fromNow />
          on{" "}
          <Moment format="dddd, DD MMMM YYYY" date={post.date} fromNow ago />
          {" "}
          ({post.timeToRead} {post.timeToRead <= 1 ? " minute" : " minutes"})
        </p>
      </div>
    )
  }
}

export default PostSnippet
