"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { User } from "@/types";

interface Props {
	gameId: string;
	username: string;
	setUser: React.Dispatch<React.SetStateAction<User>>;
	setIsJoined: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function JoinGame({
	gameId,
	username,
	setUser,
	setIsJoined,
}: Props) {
	const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setUser((curUser) => {
			return {
				...curUser,
				name: e.target.value,
			};
		});
	};

	const onJoin = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	): void => {
		setIsJoined(true);
	};

	// const onJoin = (e: React.)

	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<Card className="w-[350px] bg-white">
				<CardHeader>
					<CardTitle>Join Game</CardTitle>
					<CardDescription>
						Join a game and have fun with friends
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="GameId">Game ID:</Label>
								<Input
									disabled={true}
									id="GameId"
									value={gameId}
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Name:</Label>
								<Input
									id="name"
									type="text"
									placeholder="Username"
									value={username}
									onChange={onUsernameChange}
								/>
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex">
					<Button
						disabled={username.length === 0}
						onClick={onJoin}
						className="w-full"
					>
						Join Game
						{/* <Loader2 className="animate-spin" /> */}
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
