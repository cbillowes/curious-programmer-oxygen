import React, { Component } from "react"

class Year_2018 extends Component {
  render() {
    return (
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
              you need two things: technical knowledge to spot broader patterns
              and connections, and data on the bug itself to understand the
              problem. In this article, I’ll show you how Google Chrome’s
              Developer Tools can help you fix JS and HTML/CSS bugs fast.
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
              I was leaving the corporate world behind so I chose to rebrand as
              curious programmer because of my curiosity.
            </p>
          </div>
        </li>
      </ul>
    )
  }
}

export default Year_2018
