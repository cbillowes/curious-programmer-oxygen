import React, { Component } from "react"

class Introduction extends Component {
  render() {
    return (
      <div className="bio">
        <div className="photo" />
        <h1>Hello Clarice</h1>
        <p>
          My name is Clarice Bouwer. I am a software generalist. I am curious
          about how things work.
          <br />I offer giggles, laughs and a wealth of radiant energy which
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
    )
  }
}

export default Introduction
