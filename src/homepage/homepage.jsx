import React from "react";
import CardList from "./homepage_cards.jsx";
import Carousel from "./carousel.jsx";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const items = [
      {
        name: "Miso Salmon",
        image:
          "https://www.tokyotimes.com/wp-content/uploads/2013/03/japanese-food.jpg",
        rating: 4.41,
        description:
          "Japanese style-broiled salmon just like the restaurants.  Easy recipe I came up with at the request of my family. Serve with sticky white rice and a light salad."
      },
      {
        name: "Miso Salmon (Sake Misozuke) with Spinach Sauce",
        image: "http://cdn.skim.gs/images/v1/msi/fvc7d7csgmaak7703rfn/things-only-people-who-love-japanese-food-will-understand",
        rating: 3.5,
        description:
          "Salmon fillets are marinated in white miso, then broiled with a vibrant spinach sauce."
      },
      {
        name: "Poached Salmon Tobiko Bowls",
        image: "https://migrationology.smugmug.com/Japan-2015/i-LvtBZKX/0/X3/japanese-comfort-food-2-X3.jpg",
        rating: 0.0,
        description:
          "Sticky rice is topped with salmon and tobiko (fish eggs) in this quick and easy Japanese-inspired bowl that is ready in less than 1 hour."
      },
      {
        name: "Nona's Tableside Homemade Soft Tofu",
        image:
          "https://gaijinpot.scdn3.secure.raxcdn.com/wp-content/uploads/sites/4/2016/11/oyakodon.jpg",
        rating: 5.0,
        description:
          "Although somewhat similar to silken (soft) tofu since no weight is placed on tofu to extract liquid, this type of tofu is not quite silken in texture. If is much softer and fluffier than silken and does not have the crisp form cutting quality of silken tofu. Simmering cut tofu for 5 minutes firms up tofu for later cooking."
      },
      {
        name: "Okura and Sakura Shrimp Japanese-Style Spaghetti",
        image: "http://harusushi.com/wp-content/uploads/2016/05/boston_uncommon_roll.jpg",
        rating: 0.0,
        description:
          "Spaghetti is tossed with tiny sakura shrimp and fresh okra in this Japanese-style pasta dish seasoned with soy sauce, mirin, and sake."
      }
    ];
    return (
      <div>
        <div>
          <div className="header-section" />

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
