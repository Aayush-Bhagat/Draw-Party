<<<<<<< HEAD
"use client";

import GameBoard from "./(game)/game";
import JoinGame from "./(game)/joinGame";
import { useReducer, useState } from "react";
import { User } from "@/types";
import {
	gameStateReducer,
	GameStateAction,
	initializeGameState,
} from "@/lib/gameStateReducer";

type Props = {
	params: {
		gameId: string;
	};
};

export default function GamePage({ params }: Props) {
	const [isJoined, setIsJoined] = useState(false);
	const [user, setUser] = useState<User>({ id: "", name: "" });
	const [gameState, dispatch] = useReducer(
		gameStateReducer,
		initializeGameState()
	);

	const { gameId } = params;
	if (!isJoined) {
		return (
			<JoinGame
				gameId={gameId}
				username={user.name}
				setUser={setUser}
				setIsJoined={setIsJoined}
			/>
		);
	}

	return (
		<>
			<GameBoard
				gameState={gameState}
				dispatch={dispatch}
				gameId={gameId}
			/>
		</>
	);
=======
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
>>>>>>> 9046e46 (Basic frontend template)
}
