import { Markup } from "interweave";
import React from "react";
import { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

const SearchedGame = () => {
  const [game, setGame] = useState([]);
  let { id } = useParams();
  const history = useHistory();

 

  useEffect(() => {
    fetch(`/games/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.games[0] == null) {
          alert("not a game");
          fetch(`/games/${id}`, {
            method: "DELETE",
            header: {
              Accepts: "application/json",
            },
	    
          });
	  history.push("/games")          
        } else {
          setGame(data.games[0]);
        }
      });
  }, []);

  const handleDelete = () => {
    fetch(`/games/${id}`, {
      method: "DELETE",
      header: {
        Accepts: "application/json",
      },
    });
  
  };

  return (
    <div>
      <h3>game</h3>
      <h2>{game.name}</h2>
      <img src={game.image_url} className="board-game" />
      <h4>
        number of players: {game.min_players} to {game.max_players}
      </h4>
      <h4>age: {game.min_age} and up</h4>
      <h4>
        play time: {game.min_playtime}min to {game.max_playtime}min{" "}
      </h4>
      <Markup content={game.description} />
      <h4>publisher: {game.publisher}</h4>
      <Link to="/games">BACK TO LIBRARY</Link>
      <br></br>
      <Link onClick={() => handleDelete()} to="/games">
        DELETE FROM LIBRARY
      </Link>
    </div>
  );
};
export default SearchedGame;
