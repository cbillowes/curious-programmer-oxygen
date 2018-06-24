import React, { Component } from "react"
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  WhatsappShareButton,

  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  RedditShareCount,

  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  GooglePlusIcon,
  LinkedinIcon,
  RedditIcon,
  WhatsappIcon
} from "react-share"
import config from "../../../data/SiteConfig"
import "./SocialLinks.css"

class SocialLinks extends Component {
  render() {
    const { postNode, postPath, mobile } = this.props
    const post = postNode.frontmatter
    const realPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix
    const url = config.siteUrl + realPrefix + postPath

    const iconSize = mobile ? 36 : 48
    const filter = count => (count > 0 ? count : "")

    return (
      <div className="social-links">
        <TwitterShareButton url={url} title={post.title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>

        <LinkedinShareButton
          url={url}
          title={post.title}
          description={postNode.excerpt}
        >
          <LinkedinIcon round size={iconSize} />
          <LinkedinShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </LinkedinShareCount>
        </LinkedinShareButton>

        <TelegramShareButton url={url}>
          <TelegramIcon round size={iconSize} />
        </TelegramShareButton>

        <WhatsappShareButton url={url} title={postNode.title}>
          <WhatsappIcon round size={iconSize} />
        </WhatsappShareButton>

        <RedditShareButton url={url} title={post.title}>
          <RedditIcon round size={iconSize} />
          <RedditShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </RedditShareCount>
        </RedditShareButton>

        <GooglePlusShareButton url={url}>
          <GooglePlusIcon round size={iconSize} />
          <GooglePlusShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </GooglePlusShareCount>
        </GooglePlusShareButton>

        <FacebookShareButton url={url} quote={postNode.excerpt}>
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </FacebookShareCount>
        </FacebookShareButton>
      </div>
    )
  }
}

export default SocialLinks
