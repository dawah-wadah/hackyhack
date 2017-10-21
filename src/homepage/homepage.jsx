import React from "react";
import { Menu, Input } from "semantic-ui-react";
import CardList from "./homepage_cards.jsx";
import Carousel from "./carousel.jsx";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const items = [
      {
        image:
          "https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?w=1260&h=750&auto=compress&cs=tinysrgb",
        name: "Pizza"
      },
      {
        image:
          "http://intimesoft.com/wp-content/uploads/2017/01/421x263xfast-food.jpg.pagespeed.ic.8dPWTXz9ce.jpg",
        name: "Burger"
      }
    ];
    return (
      <div>
        Homepage
        <div>
          <div className="header-section" />
          <Menu borderless>
            <Menu.Item>
              <Input action="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item
                name="editorials"
                active={activeItem === "editorials"}
                onClick={this.handleItemClick}
                position={"right"}
              >
                Discover Hosting
              </Menu.Item>
              <Menu.Item
                name="reviews"
                active={activeItem === "reviews"}
                onClick={this.handleItemClick}
                position={"right"}
              >
                Sign Up
              </Menu.Item>
              <Menu.Item
                name="upcomingEvents"
                active={activeItem === "upcomingEvents"}
                onClick={this.handleItemClick}
                position={"right"}
              >
                Log In
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
        <div className="carousel">
          <Carousel items={items} />
        </div>
        <div className="body-cards">
          <CardList />
        </div>
      </div>
    );
  }
}

export default Homepage;
