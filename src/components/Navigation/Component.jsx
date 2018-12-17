import React, { Component } from "react"
import Search from "../Componlets/Search/Component"
import Menu from "../Componlets/Menu/Component"
import MenuBar from "../Componlets/MenuBar/Component"
import SearchBar from "../Componlets/SearchBar/Component"
import "./Navigation.css"

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      menu: false
    }
  };

  toggleSearch = () => {
    this.setState({ 
      search: !this.state.search,
      menu: false
    });
  }

  toggleMenu = () => {
    this.setState({ 
      menu: !this.state.menu,
      search: false
    });
  }

  render() {
    return (
      <div>
        <div className="icons">
          <Search toggle={this.toggleSearch.bind(this)} active={this.state.search} />
          <Menu toggle={this.toggleMenu.bind(this)} active={this.state.menu} />
        </div>
        <MenuBar active={this.state.menu} />
        <SearchBar active={this.state.search} />
      </div>
    )
  };
}

export default Navigation
