import Card from "react-bootstrap/Card"; // Importing Card component from react-bootstrap library
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS
import React from "react"; // Importing React library for JSX usage

// Player component definition with destructured props
const Player = ({
  // Default values for props if not provided
  image = "https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png", // Default image URL
  name = "Player Name", // Default player name
  age = "20", // Default player age
  team = "Liver pool", // Default player team
  nationality = "Nigerian", // Default player nationality
  jnumber = "1", // Default player jersey number
}) => {
  return (
    <div>
      {" "}
      {/* Wrapper div */}
      <div>
        {/* Card component from react-bootstrap */}
        <Card style={{ width: "18rem" }}>
          {/* Div for maintaining aspect ratio of the image */}
          <div style={{ width: "100%", aspectRatio: "1", overflow: "hidden" }}>
            {/* Player image */}
            <img style={{ height: "100%" }} src={image} alt="" />
          </div>
          {/* Card body containing player information */}
          <Card.Body>
            {/* Player name */}
            <Card.Title>{name}</Card.Title>
            {/* Player age */}
            <Card.Text>{age}</Card.Text>
            {/* Player team */}
            <Card.Text>{team}</Card.Text>
            {/* Player nationality */}
            <Card.Text>{nationality}</Card.Text>
            {/* Player jersey number */}
            <Card.Text>{jnumber}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

// Exporting the Player component for use in other parts of the application
export default Player;
