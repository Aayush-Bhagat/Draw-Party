import { Game, TeamEnum, Word, StageEnum, User, Team } from "../types.d";
import { v4 as UUIDv4 } from "uuid";

export enum GameStateActionTypes {
	END_TURN = "END_TURN",
	GUESS_CARD = "GUESS_CARD",
	DRAWING_SUBMITTED = "DRAWING_SUBMITTED",
	JOIN_TEAM = "JOIN_TEAM",
}

export type GameStateAction =
	| {
			type: GameStateActionTypes.END_TURN;
			payload: {};
	  }
	| {
			type: GameStateActionTypes.GUESS_CARD;
			payload: {
				index: [number, number];
			};
	  }
	| {
			type: GameStateActionTypes.GUESS_CARD;
			payload: {
				index: [number, number];
			};
	  };

export function gameStateReducer(state: Game, action: GameStateAction): Game {
	switch (action.type) {
		case GameStateActionTypes.END_TURN: {
			const nextTeam =
				state.currentTurn === TeamEnum.TEAM_ONE
					? TeamEnum.TEAM_TWO
					: TeamEnum.TEAM_ONE;

			return {
				...state,
				currentTurn: nextTeam,
				currentDrawer: state[nextTeam].drawer.id,
				currentStage: StageEnum.Drawing,
			};
		}
		case GameStateActionTypes.GUESS_CARD: {
			const payload = action.payload;
			const [i, j] = payload.index;
			if (i >= state.words.length || j >= state.words[i].length) {
				return state;
			}
			const card = state.words[i][j];
		}

		default: {
			return state;
		}
	}
}

export const initializeGameState = (): Game => {
	const userOne: User = {
		id: UUIDv4.toString(),
		name: "Rodger",
	};

	const userTwo: User = {
		id: UUIDv4.toString(),
		name: "Anna",
	};

	const teamOne: Team = {
		cardsLeft: 8,
		totalCards: 8,
		drawer: userOne,
		guessers: [userOne],
	};

	const teamTwo: Team = {
		cardsLeft: 8,
		totalCards: 8,
		drawer: userTwo,
		guessers: [userTwo],
	};

	const words: Word[][] = [
		[
			{ guessed: false, team: TeamEnum.TEAM_ONE, value: "Europe" },
			{ guessed: false, team: TeamEnum.TEAM_ONE, value: "Europe" },
			{ guessed: false, team: TeamEnum.TEAM_ONE, value: "Europe" },
			{ guessed: false, team: TeamEnum.TEAM_ONE, value: "Europe" },
			{ guessed: false, team: TeamEnum.TEAM_ONE, value: "Europe" },
		],
		[
			{ guessed: false, team: TeamEnum.TEAM_ONE, value: "Europe" },
			{ guessed: false, team: TeamEnum.TEAM_ONE, value: "Europe" },
			{ guessed: false, team: TeamEnum.TEAM_ONE, value: "Europe" },
			{ guessed: false, team: TeamEnum.TEAM_ONE, value: "Europe" },
			{ guessed: false, team: TeamEnum.TEAM_ONE, value: "Europe" },
		],
		[
			{ guessed: false, team: TeamEnum.TEAM_ONE, value: "Europe" },
			{ guessed: false, team: TeamEnum.TEAM_ONE, value: "Europe" },
			{ guessed: false, team: TeamEnum.TEAM_ONE, value: "Europe" },
			{ guessed: false, team: TeamEnum.TEAM_ONE, value: "Europe" },
			{ guessed: false, team: TeamEnum.TEAM_ONE, value: "Europe" },
		],
		[
			{ guessed: false, team: TeamEnum.TEAM_ONE, value: "Europe" },
			{ guessed: false, team: TeamEnum.TEAM_ONE, value: "Europe" },
			{ guessed: false, team: TeamEnum.TEAM_ONE, value: "Europe" },
			{ guessed: false, team: TeamEnum.TEAM_ONE, value: "Europe" },
			{ guessed: false, team: TeamEnum.TEAM_ONE, value: "Europe" },
		],
	];

	const gameState: Game = {
		words,
		creator: userOne.id,
		teamOne,
		teamTwo,
		currentDrawer: userOne.id,
		currentTurn: TeamEnum.TEAM_ONE,
		currentStage: StageEnum.Drawing,
		finished: false,
		winningTeam: null,
		gameStarted: false,
	};

	return gameState;
};
