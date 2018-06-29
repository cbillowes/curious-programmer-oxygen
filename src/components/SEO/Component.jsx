import React, { Component } from "react"
import Helmet from "react-helmet"
import config from "../../../data/SiteConfig"

function getDetailsFromFrontmatter(frontmatter, postPath) {
  return {
    title: frontmatter.title,
    description: frontmatter.description ? frontmatter.description : frontmatter.excerpt,
    image: frontmatter.cover,
    postURL: `${config.siteUrl}${config.pathPrefix}${postPath}`
  }
}

function getDetails(postNode, postPath, postSEO) {
  if (postSEO) {
    return getDetailsFromFrontmatter(postNode.frontmatter, postPath)
  } else {
    return {
      title: config.siteTitle,
      description: config.siteDescription,
      image: config.siteLogo
    }
  }
}

function pushToSchemeOrgJsonLd(postSEO, blogURL, postURL, title, image, description) {
  const schema = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : ""
    }
  ]
  if (postSEO) {
    schema.push(
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
  return schema
}

class SEO extends Component {
  render() {
    const { postNode, postPath, postSEO } = this.props
    const realPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix
    const blogURL = config.siteUrl + config.pathPrefix
    let { title, description, image, postURL } = getDetails(postNode, postPath, postSEO)
    image = config.siteUrl + realPrefix + image
    const schemaOrgJsonLd = pushToSchemeOrgJsonLd(postSEO, blogURL, postURL, title, image, description)

    return (
      <Helmet>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJsonLd)}
        </script>
        <meta property="og:url" content={postSEO ? postURL : blogURL} />{postSEO ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta
          property="fb:app_id"
          content={config.siteFBAppID ? config.siteFBAppID : ""}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={config.userTwitter ? config.userTwitter : ""}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    )
  }
}

export default SEO
