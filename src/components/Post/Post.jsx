import React from "react"
import Link from "gatsby-link"
import Moment from "react-moment"
import "./Post.css"

class Post extends React.Component {
  render() {
    var post = this.props.post

    return (
      <div className="post-preview">
        <Link to={post.path} key={post.title}>
          <h2 class="post-title">
            {post.title}
          </h2>
          <h3 class="post-subtitle">
            {post.excerpt}
          </h3>
        </Link>
        <p class="post-meta">
          Posted <Moment date={post.date} fromNow />
          on <Moment format="dddd, DD MMMM YYYY" date={post.date} fromNow ago />
          <span class="estTimeToRead">
            ({post.timeToRead} {post.timeToRead <= 1 ? " minute" : " minutes"})
          </span>
        </p>
      </div>
    )
  }
}

export default Post
