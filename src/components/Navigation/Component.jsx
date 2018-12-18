import React, { Component } from "react"
import Search from "../Search/Component"
import Menu from "../Menu/Component"
import MenuBar from "../MenuBar/Component"
import SearchBar from "../SearchBar/Component"
import "./Navigation.css"

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: false,
      menu: false
    }
  }

  toggleSearch = () => {
    this.setState({
      search: !this.state.search,
      menu: false
    })
  }

  toggleMenu = () => {
    this.setState({
      menu: !this.state.menu,
      search: false
    })
  }

  render() {
    return (
      <div>
        <div className="icons">
          <Search
            toggle={this.toggleSearch.bind(this)}
            active={this.state.search}
          />
          <Menu toggle={this.toggleMenu.bind(this)} active={this.state.menu} />
        </div>
        <MenuBar active={this.state.menu} />
        <SearchBar active={this.state.search} />
      </div>
    )
  }
}

export default Navigation
