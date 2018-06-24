const path = require("path")
const _ = require("lodash")
const webpackLodashPlugin = require("lodash-webpack-plugin")
const fs = require("fs")
const siteConfig = require("./data/SiteConfig")

const {
  createPaginationPages,
  createLinkedPages
} = require("gatsby-pagination")


exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
  let slug
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      slug = `/blog/${_.kebabCase(node.frontmatter.title)}`
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`
    } else {
      slug = `/${parsedFilePath.dir}/`
    }
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")
    ) {
      slug = `/blog/${_.kebabCase(node.frontmatter.slug)}`
    }
    createNodeField({ node, name: "slug", value: slug })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {

    const postPage = path.resolve("src/templates/post.jsx")
    const tagPage = path.resolve("src/templates/tag.jsx")
    const categoryPage = path.resolve("src/templates/category.jsx")

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              limit: 1000
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              totalCount
              edges {
                node {
                  frontmatter {
                    title
                    tags
                    cover
                    date
                    category
                    author
                  }
                  fields {
                    slug
                  }
                  excerpt
                  timeToRead
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors)
          reject(result.errors)
        }

        // Creates Posts
        createLinkedPages({
          createPage,
          edges: result.data.allMarkdownRemark.edges,
          component: postPage,
          edgeParser: edge => ({
            path: edge.node.fields.slug,
            context: {
              slug: edge.node.fields.slug
            }
          }),
          circular: true
        })

        const tagSet = new Set()
        const tagMap = new Map()
        const categorySet = new Set()
        const authorSet = new Set()
        authorSet.add(siteConfig.blogAuthorId)

        result.data.allMarkdownRemark.edges.forEach(edge => {
          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag)

              const array = tagMap.has(tag) ? tagMap.get(tag) : []
              array.push(edge)
              tagMap.set(tag, array)
            })
          }

          if (edge.node.frontmatter.category) {
            categorySet.add(edge.node.frontmatter.category)
          }

          if (edge.node.frontmatter.author) {
            authorSet.add(edge.node.frontmatter.author)
          }
        })

        const tagFormatter = tag => route =>
          `/tags/${_.kebabCase(tag)}/${route !== 1 ? route : ""}`
        const tagList = Array.from(tagSet)
        tagList.forEach(tag => {
          // Creates tag pages
          createPaginationPages({
            createPage,
            edges: tagMap.get(tag),
            component: tagPage,
            pathFormatter: tagFormatter(tag),
            limit: siteConfig.sitePaginationLimit,
            context: {
              tag
            }
          })
        })

        const categoryList = Array.from(categorySet)
        categoryList.forEach(category => {
          createPage({
            path: `/categories/${_.kebabCase(category)}/`,
            component: categoryPage,
            context: {
              category
            }
          })
        })
      })
    )
  })
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-javascript") {
    config.plugin("Lodash", webpackLodashPlugin, null)
  }
}
