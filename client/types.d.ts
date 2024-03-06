export type Game = {
	words: Word[][];
	creator: string;
	teamOne: Team;
	teamTwo: Team;
	currentDrawer: string;
	currentTurn: TeamEnum;
	currentStage: StageEnum;
	finished: boolean;
	winningTeam: TeamEnum | null;
	gameStarted: boolean;
};

export type Team = {
	totalCards: number;
	cardsLeft: number;
	drawer: User;
	guessers: User[];
};

export type Word = {
	value: string;
	team: TeamCardEnum;
	guessed: boolean;
};

export enum StageEnum {
	Drawing = "DRAWING",
	GUESSING = "GUESSING",
}

export enum TeamEnum {
	TEAM_ONE = "teamOne",
	TEAM_TWO = "teamTwo",
}

enum CardEnum {
	NEUTRAL = "neutral",
	BLACK = "black",
}

export type TeamCardEnum = TeamEnum | CardEnum;

export type User = {
	id: string;
	name: string;
};
