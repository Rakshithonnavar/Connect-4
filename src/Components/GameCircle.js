import React from 'react'

import '../Game.css';


    const GameCircle = ({id,children,className,onCircleClicked}) => {
    // const onClick = (ev,id)=>{
    //     debugger;
    //     alert('on click ' + id);
    // }
    return (
        <div className={`gameCircle ${className}`} onClick={()=> onCircleClicked(id)}>
          {children}
        </div> 
    )
}

export default GameCircle