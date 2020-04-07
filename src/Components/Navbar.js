import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MenuExamplePointing extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing>
          <Menu.Item active={activeItem === "home"}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item active={activeItem === "s1"}>
            <Link to="/s1">Screen 1</Link>
          </Menu.Item>
          <Menu.Item active={activeItem === "s2"}>
            <Link to="/s2">Screen 2</Link>
          </Menu.Item>
          <Menu.Item active={activeItem === "s3"}>
            <Link to="/s3">Screen 3</Link>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
