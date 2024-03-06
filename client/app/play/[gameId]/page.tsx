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
}
