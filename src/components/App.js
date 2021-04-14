import Board from "./Board";
import PlayBtn from "./PlayBtn";
import ScoreBoard from "./ScoreBoard";
import createFossils from "./randBoard";
import "../css/app.css";
import { useEffect, useState } from "react";

const newBoard = () => {
	const board = [];
	for (let i = 0; i < 8; i++) {
		board.push([]);
		for (let j = 0; j < 8; j++) {
			board[i].push({
				id: "" + i + j,
				visible: false,
				fossil: false,
				row: i,
				col: j,
			});
		}
	}
	createFossils(board, 8);
	return board;
};

const p1Board = [];
for (let i = 0; i < 8; i++) {
	p1Board.push([]);
	for (let j = 0; j < 8; j++) {
		p1Board[i].push({
			id: "" + i + j,
			visible: false,
			fossil: false,
			row: i,
			col: j,
		});
	}
}

const p2Board = [];
for (let i = 0; i < 8; i++) {
	p2Board.push([]);
	for (let j = 0; j < 8; j++) {
		p2Board[i].push({
			id: "" + i + j,
			visible: false,
			fossil: false,
			row: i,
			col: j,
		});
	}
}
// board[y][x]
createFossils(p1Board, 8);
createFossils(p2Board, 8);
//console.log(testBoard);

function App() {
	const [twoGrid, setTwoGrid] = useState(p2Board);
	const [oneGrid, setOneGrid] = useState(p1Board);
	const [turn, setTurn] = useState("P1");
	const [score, setScore] = useState({ P1: 0, P2: 0 });
	const [playing, setPlaying] = useState(false);
	useEffect(() => {
		console.log("the state of turn has changed");
	}, [turn]);

	const newGame = () => {
		setTurn("P1");
		setPlaying(false);
		setScore({ P1: 0, P2: 0 });
		setOneGrid(newBoard());
		setTwoGrid(newBoard());
	};

	return (
		<div className="App">
			<div className="game-con">
				<h1>Turn: {turn}</h1>
				<ScoreBoard score={score} />
				{!playing && (
					<PlayBtn setPlaying={setPlaying} score={score} newGame={newGame} />
				)}
				{playing && (
					<Board
						turn={turn}
						setTurn={setTurn}
						enemy={oneGrid}
						player={twoGrid}
						setTwoGrid={setTwoGrid}
						setOneGrid={setOneGrid}
						setPlaying={setPlaying}
						score={score}
						setScore={setScore}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
