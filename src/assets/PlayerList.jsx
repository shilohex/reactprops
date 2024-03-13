import React from "react"; // Importing React library for JSX usage
import players from "../players"; // Importing the array of player data
import Player from "../Player"; // Importing the Player component

// Functional component definition for PlayerList
const PlayerList = () => {
  return (
    // JSX markup for rendering the list of players
    <div
      style={{
        display: "flex", // Flexbox layout for centering
        justifyContent: "center", // Center content horizontally
        margin: "20vh", // Margin spacing around the container
        gap: "15px", // Spacing between player cards
        backgroundColor: "lightblue", // Background color of the container
        border: "3px solid lightblue", // Border around the container
        padding: "30px", // Padding inside the container
        borderRadius: "20px", // Border radius for rounded corners
        textDecorationColor: "darkblue", // Text decoration color (not applicable here)
      }}
    >
      {/* Mapping through the array of players and rendering a Player component for each */}
      {players.map((indplayer) => (
        <Player
          // Passing individual player data as props to the Player component
          name={indplayer.name}
          age={indplayer.age}
          image={indplayer.image}
          nationality={indplayer.nationality}
          jnumber={indplayer.jnumber}
          team={indplayer.team}
        />
      ))}
    </div> // Closing tag for the container div
  );
};

// Exporting the PlayerList component for use in other parts of the application
export default PlayerList;
