import React from "react";
import { Word } from "@/types";
import WordCard from "./wordCard";

type Props = {
	words: Word[][];
};

export default function Board({ words }: Props) {
	const arr = [
		["Europe", "card 2", "card 3", "card 4", "card 5"],
		["Card 1", "card 2 ", "card 3", "card 4", "card 5"],
		["Card 1", "card 2 ", "card 3", "card 4", "card 5"],
		["Card 1", "card 2 ", "card 3", "card 4", "card 5"],
	];

	return (
		<div className="flex justify-center items-center flex-col">
			<div className="grid grid-rows-4 grid-cols-5 gap-2">
				{words.map((wordsArr, i) => {
					return wordsArr.map((word, j) => {
						return (
							<div key={`${i},${j}`}>
								<WordCard word={word} />
							</div>
						);
					});
				})}
			</div>
		</div>
	);
}
