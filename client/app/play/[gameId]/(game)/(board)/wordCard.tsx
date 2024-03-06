import React, { ReactNode } from "react";
import { Word } from "@/types";

type Props = {
	word: Word;
};

export default function WordCard({ word }: Props) {
	return (
		<div className="boarder-1 w-20 h-32 md:w-24 md:h-36 lg:w-32 lg:h-28 2xl:w-44 bg-red-500 border-red-400">
			{word.value}
		</div>
	);
}
