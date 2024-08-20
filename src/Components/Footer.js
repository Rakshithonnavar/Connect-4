import React from "react";
// import '../Game.css';
import {GAME_STATE_PLAYING,
} from  "../Constants";

const Footer = ({onSuggestClick,onNewGameClick,gamestate}) =>{
  
    return(
        <div className="panel footer">
            {
                gamestate === GAME_STATE_PLAYING && 
                <button onClick={onSuggestClick}>Suggest</button>
           }
           {
              gamestate !== GAME_STATE_PLAYING &&
            <button onClick={onNewGameClick}>New Game</button>
           }
            </div>
    );
};

export default Footer;