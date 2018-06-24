# WTF Disqus?

*We were unable to load Disqus. If you are a moderator please see our troubleshooting guide.*

✔ https://help.disqus.com/developer/javascript-configuration-variables

  * shortname: "curious-programmer"
    * ✔ **is not missing nor incorrect**

  * this.page.identifier: postNode.fields.slug "/blog/rewire-your-brain-6"

  * this.page.title: post.title "Rewire your brain (Part 6) - Neuroplasticity"
    * ✔ **is not longer than 200 characters**
    * ✔ **does not contain non-ASCII characters**

  * this.page.url: config.siteUrl + config.pathPrefix + postNode.fields.slug

    - "http://curiousprogrammer.io/blog/rewire-your-brain-6"
    - "https://curiousprogrammer.io/blog/rewire-your-brain-6"
    - "http://localhost:8081/blog/rewire-your-brain-6"
    * ✔ **does not contain spaces**
    * ✔ **is absolute URL**
    * ✔ **does not contain non-ASCII characters**

  * this.page.category_id: post.category_id "Tech"

✔ https://curious-programmer.disqus.com/embed.js

? https://help.disqus.com/troubleshooting/im-receiving-the-message-we-were-unable-to-load-disqus

  * Disqus is being loaded on a non-trusted domain
    * ✔ **it fails on https://curiousprogrammer.io and localhost**
  * Disqus is being loaded on a different domain than you registered
    * ✔ **it fails on https://curiousprogrammer.io and localhost**
  * Recent webhost or domain name change
  * Timeout
  * HTTP status error codes, e.g., 404 Not Found