import React, { useState } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function MenuExamplePointing() {
  const [activeItem, setActiveItem] = useState("home");
  console.log("activeItem", activeItem);
  return (
    <div>
      <Menu pointing>
        <Menu.Item active={activeItem === "home"}>
          <Link to="/" onClick={() => setActiveItem("home")}>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item active={activeItem === "s1"}>
          <Link to="/s1" onClick={() => setActiveItem("s1")}>
            Screen 1
          </Link>
        </Menu.Item>
        <Menu.Item active={activeItem === "s2"}>
          <Link to="/s2" onClick={() => setActiveItem("s2")}>
            Screen 2
          </Link>
        </Menu.Item>
        <Menu.Item active={activeItem === "s3"}>
          <Link to="/s3" onClick={() => setActiveItem("s3")}>
            Screen 3
          </Link>
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
