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

class Twitter extends Component {
  render() {
    const { url, title, iconSize } = this.props

    return (
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon round size={iconSize} />
      </TwitterShareButton>
    )
  }
}

class LinkedIn extends Component {
  render() {
    const { url, title, excerpt, iconSize } = this.props
    const filter = count => (count > 0 ? count : "")

    return (
      <LinkedinShareButton url={url} title={title} description={excerpt}>
        <LinkedinIcon round size={iconSize} />
        <LinkedinShareCount url={url}>
          {count => <div className="share-count">{filter(count)}</div>}
        </LinkedinShareCount>
      </LinkedinShareButton>
    )
  }
}

class Telegram extends Component {
  render() {
    const { url, iconSize } = this.props

    return (
      <TelegramShareButton url={url}>
        <TelegramIcon round size={iconSize} />
      </TelegramShareButton>
    )
  }
}

class WhatsApp extends Component {
  render() {
    const { url, title, iconSize } = this.props

    return (
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon round size={iconSize} />
      </WhatsappShareButton>
    )
  }
}

class Reddit extends Component {
  render() {
    const { url, title, iconSize } = this.props
    const filter = count => (count > 0 ? count : "")

    return (
      <RedditShareButton url={url} title={title}>
        <RedditIcon round size={iconSize} />
        <RedditShareCount url={url}>
          {count => <div className="share-count">{filter(count)}</div>}
        </RedditShareCount>
      </RedditShareButton>
    )
  }
}

class GooglePlus extends Component {
  render() {
    const { url, iconSize } = this.props
    const filter = count => (count > 0 ? count : "")

    return (
      <GooglePlusShareButton url={url}>
        <GooglePlusIcon round size={iconSize} />
        <GooglePlusShareCount url={url}>
          {count => <div className="share-count">{filter(count)}</div>}
        </GooglePlusShareCount>
      </GooglePlusShareButton>
    )
  }
}

class Facebook extends Component {
  render() {
    const { url, excerpt, iconSize } = this.props
    const filter = count => (count > 0 ? count : "")

    return (
      <FacebookShareButton url={url} quote={excerpt}>
        <FacebookIcon round size={iconSize} />
        <FacebookShareCount url={url}>
          {count => <div className="share-count">{filter(count)}</div>}
        </FacebookShareCount>
      </FacebookShareButton>
    )
  }
}

class SocialLinks extends Component {
  render() {
    const { postNode, postPath, mobile } = this.props
    const post = postNode.frontmatter
    const realPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix
    const url = config.siteUrl + realPrefix + postPath

    const iconSize = mobile ? 36 : 48

    return (
      <div className="social-links">
        <Twitter url={url} title={post.title} iconSize={iconSize} />
        <LinkedIn
          url={url}
          title={post.title}
          iconSize={iconSize}
          excerpt={postNode.excerpt}
        />
        <Telegram url={url} iconSize={iconSize} />
        <WhatsApp url={url} title={post.title} iconSize={iconSize} />
        <Reddit url={url} title={post.title} iconSize={iconSize} />
        <GooglePlus url={url} title={post.title} iconSize={iconSize} />
        <Facebook url={url} iconSize={iconSize} excerpt={postNode.excerpt} />
      </div>
    )
  }
}

export default SocialLinks
