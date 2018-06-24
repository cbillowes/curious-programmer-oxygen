webpackJsonp([0xcd603e1c33c8],{398:function(e,t){e.exports={data:{markdownRemark:{html:'<blockquote>\n<p>Do you form relationships with testers? Teaming up with testers from the\nbeginning of a feature can positively impact the quality of the feature\nbeing developed.</p>\n</blockquote>\n<p>At work we often get trapped in our roles. We develop the software so we should\nonly contribute to the development of whatever we\'re building.\nOnce complete, someone - hopefully not the user - should test it. We\n<a href="https://simpleprogrammer.com/2016/04/20/developers-poor-testers-can-done/">suck at testing</a>\nanyway don\'t we?</p>\n<p>Perhaps. I guess it depends. I don\'t particularly have "parental feelings"\ntowards my code. I love coding but I make mistakes. I can\'t think of all\npossible scenarios. I am aware of this. Today I write code and think it\'s\nthe most beautiful code I\'ve ever written.\nSome time in the future I am guaranteed to pull my hair out. I\'ve made peace\nwith it.</p>\n<blockquote>\n<p>I\'ve worked on codebases alone for most of my career. I know the sense of\nautonomy it presents but I am also well aware of the problems it can cause.\nNow that I am part of a team, I can produce better quality code because I\nhave more validation from others through brainstorms, discussions, code reviews,\nCI and testing. I have more input.</p>\n</blockquote>\n<p>The factory line of progressing a feature from UX to design to development to\nQA to DevOps into production feels very "pushy" to me. Sure it is the natural line\nof progression but we shouldn\'t just dump it onto the next stage. A deeper\nunderstanding of the <strong>purpose</strong> of the feature is definitely desirable.</p>\n<h2 id="reaching-the-testing-stage"><a href="#reaching-the-testing-stage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reaching the testing stage</h2>\n<p>Let\'s focus on development to QA. Quality assurance is something that\nshouldn\'t be an after-thought therefore I\'m going to refer to this stage as\n<strong>testing</strong> instead of QA. <em>(This is a more favorable term I\'ve picked up\nthrough many craftsman in our industry)</em></p>\n<h3 id="understanding-the-feature"><a href="#understanding-the-feature" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Understanding the feature</h3>\n<p>Imagine a feature submitted for testing where the tester doesn\'t understand the\nfeature entirely. The feature is tested subjectively, goes to production and its a\ndisaster. Or it goes back to development because it failed. Perhaps the tester\nwasn\'t aware of something critical to the feature.</p>\n<p>Does this make them bad testers? I don\'t think so. I think it\'s just an error in\ncommunication.</p>\n<p>It could be that the preferred method of communication is through email or\ndigital boards. I feel that text is great for audit trails and refreshing your\nmemory of something but it is subjective. When I read something I build a\npicture in my mind. That picture may look completely different to someone else.\nIn practice, talking to one another can help iron out those kinks in understanding.</p>\n<p>If the testers are in the same vicinity as you, what stops you from\nhaving a conversation with them? If you are working remotely, you could\nhave VoIP call.</p>\n<h3 id="not-always-very-technical"><a href="#not-always-very-technical" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Not always very technical</h3>\n<p>Most people won\'t say out of the blue, "hey, I am not a technical person"\nso the level of technical skills shouldn\'t be assumed. Technical issues -\nnetwork connectivity, proxy-related, authentication problems, environment\nconfiguration misalignment, etc. - could cause terrible impediments for testers.</p>\n<p>If you are technical, why not step in an lend a helping hand? Encourage your\nteam to raise issues before stand-ups the next day. You don\'t have to take on\neverything yourself but you could be a gateway to roping in the right people\nfor the job. Show your tester how you are resolving it so that he/she can learn\nand upskill in that space.</p>\n<h3 id="user-focused"><a href="#user-focused" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>User-focused</h3>\n<p>Testers try to understand how users interact with systems. Depending\non the audience, this could be completely different to how a developer interacts\nwith a system. If you are very technical and logical, what you create may make\nsense to you. That doesn\'t mean that your users will understand it.</p>\n<p>You could learn a lot about testing and how users interact with what you build\nwhen you partner up with your tester.</p>\n<h3 id="use-cases"><a href="#use-cases" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Use-cases</h3>\n<p>As testers are user-focused, they think up different use cases to test features\nagainst. If a feature fails any of these cases, it needs to be fixed before\nit can progress. This is valuable knowledge that we should consider upfront.</p>\n<p>This could help us understand what will be tested so that we can ensure we cater\nfor such cases. It\'s less expensive as stories have a lower chance of hopping\nback and forth within a sprint.</p>\n<h3 id="automated-tests"><a href="#automated-tests" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Automated tests</h3>\n<p>Testers these days rely on testing our systems by executing automated regression\nand functional test suites. This involves code. Perhaps we can help out here.\nThis could provide a great platform to learn new tools and share knowledge and ideas.</p>\n<p>There is nothing wrong with pair programming with a tester.</p>\n<h2 id="my-final-thoughts"><a href="#my-final-thoughts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>My final thoughts</h2>\n<p>The team is responsible for quality and delivery of software - not you alone.\nYou may not have control over the entire eco-system but you do have\ncontrol over the quality of the code going into the repository. How much do you\nvalue quality?</p>\n<p>You can\'t do everything alone. You need to work cohesively as a team.</p>\n<blockquote>\n<p><a href="https://twitter.com/ozchihwayi">Oz Chihwayi</a> and\n<a href="https://twitter.com/jancowol">Janco Wolmarans</a> presented together at\n<a href="http://www.meetup.com/DeveloperUG/">DeveloperUG</a>\n(a local meetup) one night. Their talk was titled <strong>"The story of a Tester and a\nDeveloper"</strong>. This story really resonated with me as it touched on a lot of\nconcepts I had to figure out the hard way.</p>\n</blockquote>',timeToRead:4,excerpt:"Do you form relationships with testers? Teaming up with testers from the\nbeginning of a feature can positively impact the quality of the…",frontmatter:{title:"Bonding with Testers",cover:"https://picsum.photos/1280/500/?image=7",date:"2016-05-04 23:56:55 +0200",category:"tech",tags:["Relationships","Communication","Productivity"]},fields:{slug:"/blog/bonding-with-testers"}},prev:{excerpt:"Do people look confused when you talk to them? Only you can truly know what\nis going on inside your mind…",frontmatter:{title:"Context-driven queries",cover:"https://picsum.photos/1280/500/?image=192",date:"2016-05-07 15:28:21 +0200"},fields:{slug:"/blog/context-driven-queries"}},next:{excerpt:"Do you keep business informed? Business won't know when things are not working\nout unless you tell them. It is…",frontmatter:{title:" Manage expectations",cover:"https://picsum.photos/1280/500/?image=1062",date:"2016-05-02 19:20:00 +0200"},fields:{slug:"/blog/manage-expectations"}}},pathContext:{slug:"/blog/bonding-with-testers",total:57,prev:"/blog/context-driven-queries",next:"/blog/manage-expectations"}}}});
//# sourceMappingURL=path---blog-bonding-with-testers-3fd868e7afac97b5f537.js.map