import React, { Component } from "react"
import Search from "../Componlets/Search/Component"
import Menu from "../Componlets/Menu/Component"
import MenuBar from "../Componlets/MenuBar/Component"
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
    this.setState({ search: !this.state.search });
  }

  toggleMenu = () => {
    this.setState({ menu: !this.state.menu });
  }

  render() {
    return (
      <div>
        <Search toggle={this.toggleSearch.bind(this)} active={this.state.search} />
        <Menu toggle={this.toggleMenu.bind(this)} active={this.state.menu} />
        <MenuBar toggle={this.toggleMenu.bind(this)} active={this.state.menu} />
     </div>
    )
  };
}

export default Navigation
