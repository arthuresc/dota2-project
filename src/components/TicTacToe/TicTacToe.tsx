// import { useEffect } from "react";

import { useEffect, useState } from "react";

/*
- Preciso montar um array com todas as possibilidades de jogadas
- Criar botoes que alterem um unico objeto
- Criar o objeto que regula as casas do jogo, com estado inicial em null cada propriedade, mas será alterada ao decorrer do jogo para 0 (O) ou 1 (X)
*/

// function Square({ value, onSquareClick }) {

// }

const Player = () => {
  const boxes = []
  let id;
  return data;
}

const Board= () => {
  let winner:number
  const squares:object = {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,    
  }
  function getSquare(player:number, square:number):void {
    squares[square] = player
  }
  function winnerChecker():number {
    // Criar um 
  }
  const plays:number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
  ]
}


export default function TicTacToe (props)  {

  console.log(props, ' oiii')

  const [last, setLast] = useState(props.last)

  useEffect(() => {
    setLast(props.last)
  }, [props.last])

  function changeLast() {
    console.log(' rodou', last)
    setLast('pinda')  
  }



  return(
    <div className="grid grid-cols-3 grid-rows-3 text-center">
      <button onClick={changeLast} className="size-16 bg-rose-600 flex justify-items-center">1</button>
      <button className="size-16 bg-rose-600 flex justify-items-center">2</button>
      <button className="size-16 bg-rose-600 flex justify-items-center">3</button>
      <button className="size-16 bg-rose-600 flex justify-items-center">4</button>
      <button className="size-16 bg-rose-600 flex justify-items-center">5</button>
      <button className="size-16 bg-rose-600 flex justify-items-center">6</button>
      <button className="size-16 bg-rose-600 flex justify-items-center">7</button>
      <button className="size-16 bg-rose-600 flex justify-items-center">8</button>
      <button className="size-16 bg-rose-600 flex justify-items-center">9</button>
    </div>
    
  )
}
