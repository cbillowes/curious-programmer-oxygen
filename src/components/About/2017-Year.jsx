import React, { Component } from "react"

class Year_2017 extends Component {
  render() {
    return (
      <ul className="timeline">
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
              Imposter Syndrome impacts my day-to-day decisions and confidence,
              affects growth by limiting opportunities and makes me feel
              unworthy. I'd like to share my experience &amp; perspective of
              feeling like a fraud with other software professionals.
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
      </ul>
    )
  }
}

export default Year_2017
