import React from "react"
import Link from "gatsby-link"
import PostTags from "../PostTags/Component"
import PostMeta from "../PostMeta/Component"
import "./PostSnippet.css"

class PostSnippet extends React.Component {
  render() {
    const post = this.props.post
    const excludeTag = this.props.excludeTag

    return (
      <div className="post-preview">
        <Link to={post.path} key={post.title}>
          <div
            className="post-cover"
            style={{ backgroundImage: `url(${post.cover})` }}
          />
          <h2 className="post-title">{post.title}</h2>
          <h3 className="post-subtitle">{post.excerpt}</h3>
        </Link>
        <PostTags tags={post.tags} excludeTag={excludeTag} />
        <PostMeta
          timeToRead={post.timeToRead}
          date={post.date}
          orientation={post.orientation}
        />
      </div>
    )
  }
}

export default PostSnippet
