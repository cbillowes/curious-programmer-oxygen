import React from "react"
import PostSnippet from "../PostSnippet/Component"
import "./PostListing.css"

class PostListing extends React.Component {
  getPostList() {
    const postList = []
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      })
    })
    return postList
  }
  render() {
    const postList = this.getPostList()
    const excludeTag = this.props.excludeTag

    return (
      <div id="post-listing" className="container">
        <div className="row">
          <div className="col-lg-9 col-md-9 mx-auto">
            {
              postList.map(post => (
                <div key={post.path}>
                  <PostSnippet post={post} excludeTag={excludeTag} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default PostListing
