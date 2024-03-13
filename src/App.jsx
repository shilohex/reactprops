import "./App.css"; // Importing CSS styles for the App component
import React from "react"; // Importing React library for JSX usage
import PlayerList from "./assets/PlayerList"; // Importing PlayerList component

// Functional component definition for the main App
const App = () => {
  return (
    // JSX markup for rendering the main App
    <div className="player">
      {" "}
      {/* Container div with a class name */}
      {/* Rendering the PlayerList component */}
      <PlayerList />
    </div>
  );
};

// Exporting the App component for use in other parts of the application
export default App;
