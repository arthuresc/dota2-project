// import { useEffect } from "react";

import { useEffect, useState } from "react"

/*
- Preciso montar um array com todas as possibilidades de jogadas
- Criar botoes qu alterem um unico objeto
- Criar o objeto que regula as casas do jogo, com estado inicial em null cada propriedade, mas será alterada ao decorrer do jogo para 0 (O) ou 1 (X)
*/

// function Square({ value, onSquareClick }) {

// }


export default function TicTacToe(props) {

  console.log(props, ' oiii')

  const [lest, setLest] = useState(props.lest)

  useEffect(() => {
    setLest(props.lest)
  }, [props.lest])

  function changeLest() {
    console.log(' rodou', lest)
    setLest('pinda')
  }



  return(
    <div className="grid grid-cols-3 grid-rows-3 text-center">
      <button onClick={changeLest} className="size-16 bg-rose-600 flex justify-items-center">{props.lest}</button>
      <div className="size-16 bg-rose-600 flex justify-items-center">2</div>
      <div className="size-16 bg-rose-600 flex justify-items-center">3</div>
      <div className="size-16 bg-rose-600 flex justify-items-center">4</div>
      <div className="size-16 bg-rose-600 flex justify-items-center">5</div>
      <div className="size-16 bg-rose-600 flex justify-items-center">6</div>
      <div className="size-16 bg-rose-600 flex justify-items-center">7</div>
      <div className="size-16 bg-rose-600 flex justify-items-center">8</div>
      <div className="size-16 bg-rose-600 flex justify-items-center">9</div>
    </div>
    
  )
}