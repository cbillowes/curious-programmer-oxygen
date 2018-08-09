import $ from "jquery"
import React, { Component } from "react"
import { Collapse, CardBody, Card, CardHeader } from "reactstrap"

class Accordion extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      openCards: [],
      content: this.parse($(props.content))
    }
  }

  componentDidMount() {
    $("#accordion h2 .anchor").remove()
  }

  parse(elements) {
    let parsed = {
      introduction: document.createElement("div"),
      cards: []
    }

    let titleIndex = 0
    elements.map(index => {
      const element = $(elements[index])
      let content = $(element).html()

      if (element.prop("nodeName") === "H2") {
        parsed.cards.push(createCard(content))
        titleIndex++
      } else {
        let card = parsed.cards[titleIndex - 1]
        if (content) {
          if (card) {
            var el = createBody(content.trim())
            card.body.appendChild(el)
          } else {
            parsed.introduction.appendChild(createIntroduction(content))
          }
        }
      }
      element.remove()
    })

    return parsed
  }

  toggle(e) {
    let event = e.target.dataset.event
    let openCards = this.state.openCards
    let index = Number(event) ? Number(event) : 0

    if (this.isCardOpen(index)) {
      openCards.pop(index)
    } else {
      openCards.push(index)
    }

    this.setState({
      openCards: openCards
    })
  }

  isCardOpen(index) {
    for (let i = 0; i < this.state.openCards.length; i++) {
      if (this.state.openCards[i] === index) {
        return true
      }
    }
    return false
  }

  render() {
    const { content } = this.state
    let index = 0

    return (
      <div id="accordion">
        <div
          dangerouslySetInnerHTML={{ __html: content.introduction.innerHTML }}
        />
        {content.cards.map(card => {
          index++
          return (
            <Card key={`accordion-card-${index}`}>
              <CardHeader
                key={`accordion-title-${index}`}
                data-event={index}
              >
                <h2
                  key={`accordion-heading-${index}`}
                  onClick={this.toggle}
                  data-event={index}
                  dangerouslySetInnerHTML={{
                    __html: `${index}. ${card.title}`
                  }}
                />
              </CardHeader>
              <Collapse isOpen={this.isCardOpen(index)}>
                <CardBody
                  dangerouslySetInnerHTML={{ __html: card.body.innerHTML }}
                />
              </Collapse>
            </Card>
          )
        })}
      </div>
    )
  }
}

function createCard(title) {
  return {
    title: title,
    body: document.createElement("div")
  }
}

function createBody(content) {
  let div = document.createElement("div")
  if (content.startsWith("<li>")) {
    div.innerHTML += `<ul>${content}</ul>`
  } else if (content.startsWith("<thead>")) {
    div.innerHTML += `<table>${content}</table>`
  } else {
    div.innerHTML += content
  }
  return div
}

function createIntroduction(content) {
  let p = document.createElement("p")
  content.split(/\n/).map(item => {
    p.innerHTML += item
  })
  return p
}

export default Accordion
