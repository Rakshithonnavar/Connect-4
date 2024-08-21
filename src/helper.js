export const isWinner = (gameBoard,currentMover,currentPlayer) =>{
   let board = [...gameBoard];
   board[currentMover]=currentPlayer;
   
    const winLines = [
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15],
    [0,4,8,12],
    [1,5,9,13],
    [2,6,10,14],
    [3,7,11,15],
    [0,5,10,16],
    [3,6,9,12],
   ];
   for(let i=0;i<winLines;i++)
   {
    const [c1,c2,c3,c4] = winLines[i];
    if(gameBoard[c1] >0 && gameBoard[c1] === gameBoard[c2] && gameBoard[c2] === gameBoard[c3] && gameBoard[c3] === gameBoard[c4])
   {
    return true;
   }
}
   return false;

}
export const isDraw = (gameBoard,currentMover,currentPlayer) =>{
    let board = [...gameBoard];
    board[currentMover] = currentPlayer;
    let count = board.reduce((n,x) =>n*(x===0),0)
    console.log(`count ${count}`);
    return count ===0;
}

export const getRandomComputerMove =(gameBoard)=>{
   let validMoves = [];
   for(let i=0; i< gameBoard.length;i++)
   {
      if(gameBoard[i]===0)
      {
         validMoves.push(i);
      }
   }
   let randomMove = Math.floor(Math.random() * validMoves.length);
      return validMoves[randomMove];   
}
const getPosition = (gameBoard,moveChecks)=>{
   for(let check=0;check<moveChecks.length;check++)
   {
      for(let i=0;i<moveChecks[check].max;i+=moveChecks[check].step)
      {
         let series = gameBoard[i+ moveChecks[check].indexes[0]].toString()+
         gameBoard[i+ moveChecks[check].indexes[0]].toString()+
         gameBoard[i+ moveChecks[check].indexes[0]].toString()+
         gameBoard[i+ moveChecks[check].indexes[0]].toString();

         switch(series)
         {
            case "1110":
            case "2220":
                  return i + moveChecks[check].indexes[3];
            case "1101":
             case "2202":
                        return i + moveChecks[check].indexes[2];
            case "1011":
            case "2022":
                  return i + moveChecks[check].indexes[1];
            case "0111":
           case "0222":
                  return i + moveChecks[check].indexes[0];
                        default:
         }
      }
   }
   return -1;
};
export const getComputerMove = (gameBoard) =>{
   let moveChecks = [
      {
         indexes:[0,4,8,12],
         max:4,
         step:1
      },
      {
         indexes:[0,1,2,3],
         max:16,
         step:4,
      },
      {
         indexes:[0,5,0,15],
         max:1,
         step:16
      },
      {
         indexes:[3,6,9,12],
         max:1,
         step:16
      },
   ];
   let position = getPosition(gameBoard,moveChecks);
   if(position >=0)
        return position;
   return getRandomComputerMove(gameBoard);
};