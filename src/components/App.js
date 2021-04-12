import Board from "./Board";
import createFossils from "./randBoard";
import "../css/app.css";
import { useEffect, useState } from "react";

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
	const [turn, setTurn] = useState("red");
	useEffect(() => {
		console.log("the state of turn has changed");
	}, [turn]);

	return (
		<div className="App">
			<div className="game-con">
				<Board
					turn={turn}
					setTurn={setTurn}
					enemy={oneGrid}
					player={twoGrid}
					setTwoGrid={setTwoGrid}
					setOneGrid={setOneGrid}
				/>
			</div>
		</div>
	);
}

export default App;
