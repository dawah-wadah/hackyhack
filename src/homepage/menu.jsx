import React from "react";
import { Menu, Input, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Menus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu borderless>
        <Menu.Item>
          <Link path to={"/"}>
            <Image src="https://i.imgur.com/KWSGq02.png" />
          </Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Input action="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="editorials"
            active={activeItem === "editorials"}
            onClick={() => console.log("clicked")}
            position={"right"}
          >
            Discover Hosting
          </Menu.Item>
          <Menu.Item
            name="reviews"
            active={activeItem === "reviews"}
            onClick={() => console.log("clicked")}
            position={"right"}
          >
            Sign Up
          </Menu.Item>
          <Menu.Item
            name="upcomingEvents"
            active={activeItem === "upcomingEvents"}
            onClick={() => console.log("clicked")}
            position={"right"}
          >
            Log In
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
export default Menus;
