import React, { Component } from "react"
import "./About.css"

class About extends Component {
  render() {
    return (
      <div className="about">
        <div class="bio">
          <div class="photo" />
          <h1>Hello Clarice</h1>

          <p>
            My name is Clarice Bouwer. I am a software generalist. I am curious
            about how things work.
          </p>

          <p>
            I offer giggles, laughs and a wealth of radiant energy which
            apparently makes people smile - and sometimes even happy. Who would
            have thought?
          </p>

          <p>
            <a href="mailto:curiousprogrammer.io@gmail.com">
              curiousprogrammer.io@gmail.com
            </a>{" "}
            &bull; <a href="https://curiousprogrammer.io/rss.xml">RSS</a> &bull;{" "}
            <a href="https://twitter.com/cbillowes">@cbillowes</a> &bull;{" "}
            <a href="http://stackoverflow.com/users/849986/cbouwer">
              StackOverflow
            </a>{" "}
            &bull; <a href="https://github.com/cbillowes">GitHub</a> &bull;{" "}
            <a href="https://za.linked.com/in/cbouwer">LinkedIn</a>
          </p>
        </div>

        <ul className="timeline">
          <li className="book">
            <span className="meta">
              <h2>
                <a href="https://www.offerzen.com/blog/debugging-with-chrome-devtools-quick-front-end-fixes">
                  OfferZen
                </a>
              </h2>
              <span>20 July 2018</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>Debugging with Chrome DevTools: Quick Front End Fixes</h3>
              <p>
                Debugging is an art form. Often, it feels like you need a series
                of serendipitous insights to fix a complicated bug. In reality,
                you need two things: technical knowledge to spot broader
                patterns and connections, and data on the bug itself to
                understand the problem. In this article, I’ll show you how
                Google Chrome’s Developer Tools can help you fix JS and HTML/CSS
                bugs fast.
              </p>
            </div>
          </li>
          <li className="work">
            <span className="meta">
              <h2>
                <a href="http://cloudafrica.net">CloudAfrica</a>
              </h2>
              <span>1 July 2018</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>Senior Systems and Web/Fullstack Developer</h3>
              <p>
                Joining the world of Systems Administration and functional
                programming in Clojure.
              </p>
            </div>
          </li>
          <li className="blog">
            <span className="meta">
              <h2>
                <a href="http://www.curiousprogrammer.io">Curious Programmer</a>
              </h2>
              <span>26 June 2018</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>Started this blog</h3>
              <p>
                I was leaving the corporate world behind so I chose to rebrand
                as curious programmer because of my curiosity.
              </p>
            </div>
          </li>
          <li className="talk">
            <span className="meta">
              <h2>
                <a href="http://www.rubyfuza.org/">Rubyfuza 2017 Conference</a>
              </h2>
              <span>3 February 2017</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>
                <a href="http://www.rubyfuza.org/">The Imposter Within</a>
              </h3>
              <p>
                Imposter Syndrome impacts my day-to-day decisions and
                confidence, affects growth by limiting opportunities and makes
                me feel unworthy. I'd like to share my experience &amp;
                perspective of feeling like a fraud with other software
                professionals.
              </p>
              <ul>
                <li>
                  <a href="https://twitter.com/i/moments/830378337516322816">
                    Twitter Moments
                  </a>
                </li>
                <li>
                  <a href="/slides/rubyfuza-2017-the-imposter-within.pdf">
                    Slides
                  </a>
                </li>
                <li>
                  <a href="/blog/rubyfuza-2017-conference/">Content</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=fkgAc0DY4s8">
                    Recording on YouTube
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="podcast">
            <span className="meta">
              <h2>
                <a href="http://developeronfire.com/podcast/episode-202-clarice-bouwer-leaving-comfort-behind">
                  Developer On Fire
                </a>
              </h2>
              <span>23 January 2017</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>
                <a href="http://developeronfire.com/podcast/episode-202-clarice-bouwer-leaving-comfort-behind">
                  Episode 202 | Clarice Bouwer - Leaving Comfort Behind
                </a>
              </h3>
              <p>
                I spoke with Dave Rael about collboration, empathy, fear, and
                being an imposter.
              </p>
            </div>
          </li>
          <li className="book">
            <span className="meta">
              <h2>
                <a href="http://www.corporateprogrammer.com">
                  Corporate Programmer
                </a>
              </h2>
              <span>13 November 2016</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>
                <a href="http://www.corporateprogrammer.com/blog/the-imposter-within/">
                  The Imposter Within
                </a>
              </h3>
              <p>
                This post sparked some interesting conversation on
                <a href="https://www.reddit.com/r/programming/comments/5cpaty/ive_had_a_lot_of_problems_with_imposter_syndrome/">
                  Reddit
                </a>, which initiated 6,734 unique pageviews within a week of
                posting.
              </p>
              <p>
                The Reddit post on the /programming subreddit surprisingly
                exceeded 200 votes.
              </p>
            </div>
          </li>
          <li className="book">
            <span className="meta">
              <h2>
                <a href="http://alistapart.com/author/clarice-bouwer">
                  A List Apart
                </a>
              </h2>
              <span>2 August 2016</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>
                <a href="http://alistapart.com/article/finding-opportunities-in-the-mistakes-we-make">
                  Finding Opportunities in the Mistakes We Make
                </a>
              </h3>
              <p>
                I am proud to announce that my article that I have been working
                on alongside editor Rose Weisburd has been published on A List
                Apart.
              </p>
            </div>
          </li>
          <li className="talk">
            <span className="meta">
              <h2>
                <a href="https://twitter.com/hashtag/drivenci">
                  Driven Unconference
                </a>
              </h2>
              <span>30 - 31 July 2016</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>Driven Unconference</h3>
              <p>
                I attended this spectacular annual event for the first time. I
                spoke about how <b>mindfulness</b> has positively impacted my
                profession.
              </p>
              <p>
                I got to meet many great professionals and form part of
                intellectual and energizing conversations.
              </p>
            </div>
          </li>
          <li className="talk">
            <span className="meta">
              <h2>
                <a href="http://www.meetup.com/Jozi-JUG/events/229688441/">
                  Jozi-JUG
                </a>
              </h2>
              <span>4 June 2016</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>Java 9 and Women in tech Unconference</h3>
              <p>
                I gave my first talk about marketing for software developers
                titled "<a href="/blog/branding-your-identity/">
                  Branding your Identity
                </a>".
              </p>
            </div>
          </li>
          <li className="work">
            <span className="meta">
              <h2>
                <a href="http://dstvdm.dstv.com/">DStv Digital Media</a>
              </h2>
              <span>Jun 2016 (Current)</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>Senior Software Developer</h3>
              <p>I was offered a permanent position to work at the company.</p>
              <p>
                I form part of a SCRUM team focusing on the DStv Now website
                which is a Video on Demand service offering Live TV streaming
                from a select number of channels as well as Movies and Series
                available on Catch Up for what is known as OTT (Over The Top)
                offerings - content allowed to be streamed on our platform.
              </p>
              <p>
                We integrate with a collection of different APIs to consume and
                consolidate the data that is displayed on the website. I am seen
                as an intrinsic leader within the team and have an exceptional
                ability to get the right people involved to offer support as
                well as being great at troubleshooting by finding needles in
                haystacks on a distributed scaled platform.
              </p>
            </div>
          </li>
          <li className="blog">
            <span className="meta">
              <h2>curious programmer</h2>
              <span>28 Apr 2016</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>Started this blog</h3>
              <p>
                Started the Corporate Programmer blog to help other software
                developers in a corporate environment.
              </p>
            </div>
          </li>
          <li className="work">
            <span className="meta">
              <h2>
                <a href="http://www.britehouse.co.za/">Britehouse</a>
              </h2>
              <span>Apr 2014 - May 2016</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>Senior Software Developer</h3>
              <p>
                I was based at DStv Digital Media where I formed part of Agile
                Scrum teams which included the Original Productions (broadcast
                production websites with voting component) and the DStv Now
                Website (Catch Up and Live Streaming website) teams.
              </p>
            </div>
          </li>
          <li className="project">
            <span className="meta">
              <span>Britehouse</span>
              <span>Apr 2014 - May 2016</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>DStv Now</h3>
              <p>
                Responsibile for developing new features and supporting the
                existing website which is the home of DStv on the move with the
                ability to watch Live TV, see the full DStv TV Guide and enjoy
                DStv Catch Up content.
              </p>
              <span className="label label-primary">C#</span>
              <span className="label label-primary">Git</span>
              <span className="label label-primary">MVC</span>
              <span className="label label-primary">Microservices</span>
              <span className="label label-primary">Grunt</span>
              <span className="label label-primary">Node</span>
              <span className="label label-primary">jQuery</span>
              <span className="label label-primary">Video On Demand</span>
              <span className="label label-primary">Jenkins</span>
              <span className="label label-primary">Distributed Cache</span>
            </div>
          </li>
          <li className="project">
            <span className="meta">
              <span>Britehouse</span>
              <span>Apr 2014 - May 2016</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>Original Productions</h3>
              <p>
                The team was responsible for production websites which include:
              </p>
              <ul>
                <li>Idols South Africa</li>
                <li>Big Brother Mzansi &amp; Angola</li>
                <li>Channel O Music Video Awards</li>
                <li>Africa Magic Viewers Choice Awards</li>
              </ul>
              <span className="label label-primary">C#</span>
              <span className="label label-primary">Git</span>
              <span className="label label-primary">MVC</span>
              <span className="label label-primary">Web API</span>
              <span className="label label-primary">SQL</span>
              <span className="label label-primary">Jenkins</span>
              <span className="label label-primary">Handlebars</span>
              <span className="label label-primary">Distributed Cache</span>
            </div>
          </li>
          <li className="work">
            <span className="meta">
              <h2>
                <a href="">
                  <a href="http://www.remata.co.za/">Remata Communications</a>
                </a>
              </h2>
              <span>Jul 2012 - Mar 2014</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>Senior Software Developer</h3>
              <p>
                In the Cross Media Solutions department, I was responsible for
                the development and maintenance of automated processes and
                custom development integration with XMPie for on-demand variable
                data printing solutions.
              </p>
            </div>
          </li>
          <li className="project">
            <span className="meta">
              <span>Remata</span>
              <span>Apr 2014 - May 2016</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>Remata Cross Media Solutions Projects</h3>
              <ul>
                <li>Platinum Life variable data print automation service</li>
                <li>Nashua Mobile business prospective variable data print</li>
                <li>Photo2Print automation</li>
                <li>Herbex Daily SMS</li>
              </ul>
              <span className="label label-primary">VB.NET</span>
              <span className="label label-primary">C#</span>
              <span className="label label-primary">LINQ</span>
              <span className="label label-primary">Web Forms</span>
              <span className="label label-primary">Entity Framework</span>
              <span className="label label-primary">SQL</span>
              <span className="label label-primary">Bootstrap</span>
              <span className="label label-primary">Clickatel</span>
              <span className="label label-primary">XMPie integration</span>
            </div>
          </li>
          <li className="community">
            <span className="meta">
              <h2>
                <a href="http://stackoverflow.com/users/849986/cbouwer?tab=profile">
                  StackOverflow
                </a>
              </h2>
              <span>Jul 2011</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>Joined a community</h3>
              <p>I joined the StackOverflow community.</p>
              <p>
                <a href="http://stackexchange.com/users/453154">
                  <img
                    src="http://stackexchange.com/users/flair/453154.png"
                    width="208"
                    height="58"
                    alt="Profile for cbouwer on Stack Exchange, a network of free, community-driven Q&amp;A sites"
                    title="Profile for cbouwer on Stack Exchange, a network of free, community-driven Q&amp;A sites"
                  />
                </a>
              </p>
            </div>
          </li>
          <li className="work">
            <span className="meta">
              <h2>
                <a href="http://www.it-em.co.za">IT Event Management</a>
              </h2>
              <span>Sept 2006 - Apr 2012</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>Lead Senior Web Developer</h3>
              <p>
                I started as a junior and worked my way up. In 2010, I was
                promoted to Lead Senior Web Developer.
              </p>
              <p>
                I was responsible for developing, deploying and supporting
                custom event registration websites in production.
              </p>
            </div>
          </li>
          <li className="project">
            <span className="meta">
              <h2>
                <a href="http://www.it-em.co.za">IT Event Management</a>
              </h2>
              <span>Sept 2006 - Apr 2012</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>Event Registration Projects</h3>
              <p>
                Throughout my years at IT Event Management I developed and
                supported projects including:
              </p>
              <ul>
                <li>Microsoft Tech-Ed Africa &amp; Middle East</li>
                <li>Microsoft Partner Summit</li>
                <li>Microsoft TechDays</li>
                <li>Microsoft DevDays</li>
                <li>Microsoft Bootcamps</li>
                <li>Microsoft ICT Best Practices</li>
                <li>Vodacom Business Partners Conference</li>
              </ul>
              <span className="label label-primary">VB.NET</span>
              <span className="label label-primary">.NET Web Forms</span>
              <span className="label label-primary">T-SQL</span>
              <span className="label label-primary">HTML</span>
              <span className="label label-primary">CSS</span>
              <span className="label label-primary">JavaScript</span>
              <span className="label label-primary">jQuery</span>
              <span className="label label-primary">Nedbank iVeri Lite</span>
              <span className="label label-primary">Mashreq payment</span>
              <span className="label label-primary">SQL Server 2005</span>
              <span className="label label-primary">SQL Server 2008</span>
              <span className="label label-primary">
                Visual Studio '08 - '10
              </span>
              <span className="label label-primary">TFS</span>
            </div>
          </li>
          <li className="work">
            <span className="meta">
              <h2>
                <a href="http://www.globres.com/">Globres</a>
              </h2>
              <span>Jan 2006 - Sept 2006</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>Junior Web Developer</h3>
              <p>
                I was responsible for developing, enhancing and supporting the
                internal Global Hotel Reservation web application.
              </p>
              <span className="label label-primary">C#</span>
              <span className="label label-primary">Crystal Reports</span>
              <span className="label label-primary">HTA</span>
              <span className="label label-primary">ASP.NET</span>
              <span className="label label-primary">Web Forms</span>
              <span className="label label-primary">SQL</span>
            </div>
          </li>
          <li className="work">
            <span className="meta">
              <span>Computer Training Institute</span>
              <span>Oct 2005 - Dec 2005</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>Junior Instructor</h3>
              <p>
                I was promoted to Junior Instructor. Additional responsibilities
                included liaising with parents and managing my own class of
                students while maintaining a low failure rate.
              </p>
            </div>
          </li>
          <li className="certificate">
            <span className="meta">
              <h2>
                <a href="https://www.cti.ac.za/">Computer Training Institute</a>
              </h2>
              <span>Aug 2005 - Oct 2005</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>Certificate</h3>
              <p>
                I received a <strong>VB.NET certificate</strong> for completing
                all modules. Passed with distinction.
              </p>
            </div>
          </li>
          <li className="certificate">
            <span className="meta">
              <h2>
                <a href="https://www.cti.ac.za/">Computer Training Institute</a>
              </h2>
              <span>Jan 2005 - Oct 2005</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>National diploma</h3>
              <p>
                I received my national diploma for
                <strong>Information Systems: Software Development</strong> with
                subjects in SQL Server 2000, C# and VB.NET. Passed with
                distinction.
              </p>
            </div>
          </li>
          <li className="work">
            <span className="meta">
              <span>Computer Training Institute</span>
              <span>Jan 2005 - Sept 2005</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>Assistant Instructor</h3>
              <p>
                I was awarded a bursary to study further while being an
                Assistant Instructor. I was responsible for developing pre-test
                materials, hosting workshops and marking projects and exams.
              </p>
            </div>
          </li>
          <li className="certificate">
            <span className="meta">
              <span>Computer Training Institute</span>
              <span>Jan 2004 - Nov 2004</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>National Diploma</h3>
              <p>
                I received my national diploma for
                <strong>Computer Science: Internet Development</strong> with
                subjects in Standard, Micro and Enterprise Java and Perl. Passed
                with distinction.
              </p>
            </div>
          </li>
          <li className="work">
            <span className="meta">
              <span>2002 - 2004</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>Freelancer</h3>
              <p>
                I did freelance websites for local companies in my spare time.
              </p>
            </div>
          </li>
          <li className="certificate">
            <span className="meta">
              <h2>
                <a href="http://www.johanjurgens.co.za/">
                  Dr Johan Jurgens High School
                </a>
              </h2>
              <span>2003</span>
            </span>
            <div className="icon">
              <span />
            </div>
            <div className="description">
              <h3>Matriculated</h3>
              <p>
                Matriculated with exemption. All subjects on higher grade.
                Subjects included English, Afrikaans, Computer Science,
                Mathematics, Science and Economics.
              </p>
              <ul>
                <li>Representative of the Student Council (2002-2003)</li>
                <li>Editor of school newspaper (2003)</li>
                <li>Layout editor of school newspaper (2001-2002)</li>
                <li>Photographer for school newspaper (2000)</li>
                <li>Web Master of IT College (2001 - 2002)</li>
                <li>Member of the IT College (2000-2002)</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default About
