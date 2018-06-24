module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "Curious Programmer", // Site title.
  siteTitleAlt: "Curious Programmer", // Alternative site title for SEO.
  siteLogo: "/logos/logo.png", // Logo used for SEO and manifest.
  siteUrl: "https://curiousprogrammer.io", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "", // Website description used for RSS feeds/meta description tag.
  sitePaginationLimit: 10,
  siteRss: "/feed.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "UA-77127562-2", // GA tracking ID.
  disqusShortname: "curious-programmer", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Clarice Bouwer", // Username to display in the author segment.
  userTwitter: "cbillowes", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Johannesburg, South Africa", // User location to display in the author segment.
  userAvatar: "https://en.gravatar.com/userimage/34549463/acc6b8778c7b14437b7590078012302e.png?size=150", // User avatar to display in the author segment.
  userDescription:
    "I'm a curious web generalist who's learned that the bigger picture is about people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/cbillowes",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/cbillowes",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:curiousprogrammer.io@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Curious Programmer", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
}
