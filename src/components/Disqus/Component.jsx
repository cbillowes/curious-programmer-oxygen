import React, { Component } from "react"
import { DiscussionEmbed } from "disqus-react"
import config from "../../../data/SiteConfig"

class Comments extends Component {
  render() {
    const { postNode } = this.props
    const post = postNode.frontmatter
    const disqusShortname = config.disqusShortname
    const disqusConfig = {
      url: `${config.siteUrl}${config.pathPrefix}`,
      identifier: post.id,
      title: post.title
    }
    return (
      <div>
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    )
  }
}

export default Comments
