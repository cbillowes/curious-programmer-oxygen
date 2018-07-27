import React, { Component } from "react"
import ReactDisqusComments from "react-disqus-comments"
import config from "../../../data/SiteConfig"

class Disqus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toasts: []
    }
    this.notifyAboutComment = this.notifyAboutComment.bind(this)
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this)
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts
    this.setState({ toasts })
  }
  notifyAboutComment() {
    const toasts = this.state.toasts.slice()
    toasts.push({ text: "New comment available!" })
    this.setState({ toasts })
  }
  render() {
    const { postNode } = this.props
    if (!config.disqusShortname) {
      return null
    }
    const post = postNode.frontmatter
    const comment = {
      shortname: config.disqusShortname,
      identifier: postNode.fields.slug,
      title: post.title,
      url: `${config.siteUrl}${config.pathPrefix}`,
      pageUrl: `${config.siteUrl}${config.pathPrefix}${config.pageUrl}`,
      categoryId: post.category_id
    }
    return (
      <ReactDisqusComments
        shortname={comment.shortname}
        identifier={comment.url}
        title={comment.title}
        url={comment.pageUrl}
        category_id={comment.categoryId}
        onNewComment={this.notifyAboutComment}
      />
    )
  }
}

export default Disqus
