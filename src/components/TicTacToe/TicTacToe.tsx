// import { useEffect } from "react";

function Square({ value, onSquareClick }) {

}


export default function TicTacToe() {

  return(
    <div className="grid grid-cols-3 grid-rows-3 text-center">
      <div className="size-16 bg-rose-600 flex justify-items-center">1</div>
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