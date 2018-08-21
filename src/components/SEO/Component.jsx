import React, { Component } from "react"
import Helmet from "react-helmet"
import config from "../../../data/SiteConfig"

function getDefaultImage(config) {
  let url = config.siteUrl
  return `${url}/${config.defaultSocialCover.replace(/..\//, "")}`
}

function getSocialImage(postMeta, config) {
  let url = config.siteUrl
  let defaultImage = getDefaultImage(config)
  let coverImage = postMeta.cover ? postMeta.cover : defaultImage
  let postImage = postMeta.socialCover
  let hasPartialUrl = coverImage.startsWith("../")

  if (postImage) {
    return `${url}/${postImage}`
  }

  if (hasPartialUrl) {
    return `${url}/${coverImage.replace(/..\//, "")}`
  }

  return coverImage
}

class SEO extends Component {
  render() {
    const { postNode, postPath, postSEO } = this.props
    let title
    let description
    let image
    let postURL
    let twitterUser = config.userTwitter ? `@${config.userTwitter}` : ""
    if (postSEO) {
      const postMeta = postNode.frontmatter
      title = postMeta.title
      description = postMeta.description
        ? postMeta.description
        : postNode.excerpt
      image = getSocialImage(postMeta, config)
      postURL = `${config.siteUrl}${config.pathPrefix}${postPath}`
    } else {
      title = config.siteTitle
      description = config.siteDescription
      image = getDefaultImage(config)
    }
    const realPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix
    image = config.siteUrl + realPrefix + image
    const blogURL = config.siteUrl + config.pathPrefix
    const schemaOrgJSONLD = [
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : ""
      }
    ]
    if (postSEO) {
      schemaOrgJSONLD.push(
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": postURL,
                name: title,
                image
              }
            }
          ]
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url: blogURL,
          name: title,
          alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
          headline: title,
          image: {
            "@type": "ImageObject",
            url: image
          },
          description
        }
      )
    }
    return (
      <Helmet>
        {/* General tags */}
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        <meta property="og:url" content={postSEO ? postURL : blogURL} />
        {postSEO ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta
          property="fb:app_id"
          content={config.siteFBAppID ? config.siteFBAppID : ""}
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitterUser} />
        <meta name="twitter:creator" content={twitterUser} />
      </Helmet>
    )
  }
}

export default SEO
