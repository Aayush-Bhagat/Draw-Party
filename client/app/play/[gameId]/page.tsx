"use client"

import Canvas from "./(draw)/canvas"

interface params {
  params:{
    gameId: string
  }
}


export default function Game({ params } : params) {
  const {gameId} = params

  return (
      <div>
        <h1> Game Id: {gameId} </h1>
        <Canvas />
      </div>
  )
}
