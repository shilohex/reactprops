import React from "react";
import players from "../players";
import Player from "../Player";

const PlayerList = () => {
  return (
    <div style={{ display: "flex" }}>
      {players.map((indplayer) => (
        <Player
          name={indplayer.name}
          age={indplayer.age}
          image={indplayer.image}
          nationality={indplayer.nationality}
          jnumber={indplayer.jnumber}
          team={indplayer.team}
        />
      ))}
    </div>
  );
};

export default PlayerList;
