"use client";

import GameCanvas from "./(draw)/canvas";
import Board from "./(board)/board";
import { Dispatch, useRef, useState } from "react";
import { Game } from "@/types";
import { GameStateAction } from "@/lib/gameStateReducer";

interface Props {
	gameId: string;
	gameState: Game;
	dispatch: Dispatch<GameStateAction>;
}

export default function GameBoard({ gameId, gameState, dispatch }: Props) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	return (
		<div className=" w-screen h-screen ">
			<h1> Game Id: {gameId} </h1>
			<div className="flex gap-10 h-full justify-center items-start flex-col md:items-center xl:flex-row">
				<GameCanvas isDrawer={true} canvasRef={canvasRef} />
				<Board words={gameState.words} />
			</div>
		</div>
	);
}
