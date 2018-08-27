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

function getSeo(config, postNode, postPath, hasSEO) {
  let fbId = config.siteFBAppID ? config.siteFBAppID : ""
  let seo
  if (hasSEO) {
    const postMeta = postNode.frontmatter
    seo = {
      title: postMeta.title,
      description: postMeta.description
        ? postMeta.description
        : postNode.excerpt,
      image: getSocialImage(postMeta, config),
      twitterUser: config.userTwitter ? `@${config.userTwitter}` : "",
      facebookId: fbId,
      url: `${config.siteUrl}${config.pathPrefix}${postPath}`,
      type: "website"
    }
  } else {
    seo = {
      title: config.siteTitle,
      description: config.siteDescription,
      image: getDefaultImage(config),
      url: config.siteUrl + config.pathPrefix,
      facebookId: fbId,
      type: "article"
    }
  }
  console.log(seo)
  return seo
}

function getSchema(seo, config, hasSeo) {
  const schema = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: seo.url,
      name: seo.title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : ""
    }
  ]

  if (hasSeo) {
    schema.push(
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": seo.url,
              name: seo.title,
              image: seo.image
            }
          }
        ]
      },
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        url: seo.url,
        name: seo.title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
        headline: seo.title,
        image: {
          "@type": "ImageObject",
          url: seo.image
        },
        description: seo.description
      }
    )
  }
  return JSON.stringify(schema)
}

class SEO extends Component {
  render() {
    const { postNode, postPath, postSEO } = this.props
    let seo = getSeo(config, postNode, postPath, postSEO)
    let schema = getSchema(seo, config, postSEO)

    return (
      <Helmet>
        {/* General tags */}
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content={seo.type} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta property="fb:app_id" content={seo.facebookId} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={seo.twitterUser} />
        <meta name="twitter:creator" content={seo.twitterUser} />

        {/* Schema.org tags */}
        <script type="application/ld+json">{schema}</script>
      </Helmet>
    )
  }
}

export default SEO
