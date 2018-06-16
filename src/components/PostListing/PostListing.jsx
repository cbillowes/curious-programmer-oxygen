import React from "react";
import Link from "gatsby-link";
import Moment from "react-moment"
import "./PostListing.css";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div className="container">
        {
          postList.map(post => (
            <div className="post-preview">
              <h2 class="post-title">
                <Link to={post.path} key={post.title}>
                  {post.title}
                </Link>
              </h2>
              <h3 class="post-subtitle">
                {post.excerpt}
              </h3>
              <p class="post-meta">
                Posted
                <Moment date={post.date} fromNow />
                on
                <Moment format="dddd DD MMMM YYYY" date={post.date} fromNow ago />
                (
                  {post.timeToRead}
                  {post.timeToRead <= 1 ? " minute" : " minutes"}
                )
              </p>
            </div>
        ))}
      </div>
    );
  }
}

export default PostListing;
