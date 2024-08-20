import React, { useState} from "react";
import "../Game.css";
// import {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import GameCircle from "./GameCircle";

import { isDraw, isWinner,getComputerMove } from "../helper";
import {GAME_STATE_PLAYING,
    GAME_STATE_WIN,
    NO_PLAYER,
    PLAYER_1,
    PLAYER_2,
    NO_CIRCLES, 
 GAME_STATE_DRAW,
} from  "../Constants";

const GameBoard  = () =>{
  const[gameBoard ,  setGameBoard] = useState(Array(NO_CIRCLES).fill(NO_PLAYER));
  const[currentPlayer,setCurrentPlayer] = useState(PLAYER_1);
  const [gameState,setGameState] = useState(GAME_STATE_PLAYING);
  const [winPlayer,setWinPlayer] = useState(NO_PLAYER);
//   console.log(gameBoard);

//   useEffect(() =>{
//     initGame();
//   },[])


const initGame = () =>{
    // console.log('init')   
    setCurrentPlayer(PLAYER_1);
    setGameBoard(Array(NO_CIRCLES).fill(NO_PLAYER));
     setGameState(GAME_STATE_PLAYING);
}

  const initBoard = () =>{
    const circles = [];
    for(let i=0;i<NO_CIRCLES;i++)
    {
        circles.push(renderCircle(i));
    }
    return circles;
    // setCurrentPlayer(PLAYER_1);
    // setGameBoard(Array(16).fill(NO_PLAYER));
  };
//   const suggestMove =()=>{
//     circleClicked(getComputerMove(gameBoard));
//   }
    const circleClicked = (id) =>{    
        console.log('circle clicked:' + id);
        if(gameBoard[id] !== NO_PLAYER)return;
        if(gameState !==  GAME_STATE_PLAYING) return ;

        let newGameBoard = [...gameBoard];
        newGameBoard[id] = currentPlayer;

        if (isWinner(newGameBoard, id, currentPlayer)) {
            setGameState(GAME_STATE_WIN);
            setWinPlayer(currentPlayer);

        } 
        else {
            if (newGameBoard.every(circle => circle !== NO_PLAYER)) {
                setGameState(GAME_STATE_DRAW);
                setWinPlayer(NO_PLAYER);
        }else{
        // else if (isDraw(newGameBoard, id, currentPlayer)) {
        //     setGameState(GAME_STATE_DRAW);
        //     setWinPlayer(NO_PLAYER);
        
    
        // newGameBoard = newGameBoard.map((circle, pos) => {
        //     if (pos === id) return currentPlayer;
        //     return circle;
        // });

        // if(isWinner(gameBoard,id,currentPlayer))
        //     {
        //         setGameBoard(GAME_STATE_WIN);
        //         setWinPlayer(currentPlayer);
        //         // console.log("WINNER");
        //     }
            // if(isDraw(gameBoard,id,currentPlayer))
            //     {
            //         setGameBoard(GAME_STATE_DRAW);
            //         setWinPlayer(NO_PLAYER);
            //         // console.log("WINNER");
            //     }   
        // setGameBoard(prev => {
        //     return prev.map((circle,pos) => {
        //         if(pos === id) return currentPlayer;
        //         return circle;
        //     })
        // })
        setGameBoard(newGameBoard);
        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2  :PLAYER_1);
        }
        }

        // gameBoard[id]= currentPlayer;-->old
        // setGameBoard(gameBoard);  
        
        
        // console.log(gameBoard);------>recent
        // console.log(currentPlayer);
    };
    const renderCircle = id =>{
        return( 
        <GameCircle 
         key={id} 
         id={id} 
         className={`player_${gameBoard[id]}`}  
         onCircleClicked={circleClicked}
         />
        );
    };
  
    const onSuggestClick =()=>{
        circleClicked(getComputerMove(gameBoard));
    }

    const onNewGameClick =()=>{
        initGame();
    }
        return (
            <>
            <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer}/>
            <div className="gameBoard">{initBoard()}</div>
               <Footer onSuggestClick={onSuggestClick} onNewGameClick={onNewGameClick} gamestate={gameState}/>
           
           </>
    ) ;
};

export default GameBoard;
