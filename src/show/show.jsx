import React from "react";
import { Image, Item } from "semantic-ui-react";
import Comments from "./comments.jsx";

class ShowPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="showpage-body">
        <div className="image-container">
          <Image
            centered={true}
            src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Tonkatsu_set_by_zezebono_in_Sapporo%2C_Hokkaido.jpg"
            size="massive"
          />
          <div className="description-box">
            <Item.Group>
              <Item>
                <Item.Image
                  size="tiny"
                  src="https://react.semantic-ui.com/assets/images/wireframe/image.png"
                />

                <Item.Content>
                  <Item.Meta>Description</Item.Meta>
                  <Item.Description>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/short-paragraph.png" />
                  </Item.Description>
                  <Item.Extra>Additional Details</Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </div>
        </div>
        <div className="comments">
          <Comments />
        </div>
      </div>
    );
  }
}

export default ShowPage;
