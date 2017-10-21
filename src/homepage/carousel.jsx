import React from "react";
import { Carousel } from "react-responsive-carousel";

class CarouselNew extends React.Component {


  render() {
    const allItems = this.props.items.map(item => {
      return (
        <div key={item.image}>
          <img src={item.image} alt='Wadah is the best'/>
          <p className="legend">{item.name}</p>
        </div>
      );
    });

    return (
      <Carousel showArrows={true} axis="horizontal" infiniteLoop={true}>
        {allItems}
      </Carousel>
    );
  }
}

export default CarouselNew;
