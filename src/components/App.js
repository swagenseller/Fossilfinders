import Board from "./Board";
import createFossils from "./randBoard";
import "../css/app.css";

const testBoard = [];
for (let i = 0; i < 8; i++) {
	testBoard.push([]);
	for (let j = 0; j < 8; j++) {
		testBoard[i].push({
			id: "" + i + j,
			visible: false,
			fossil: false,
			row: i,
			col: j,
		});
	}
}
// board[y][x]
createFossils(testBoard, 8);
//console.log(testBoard);

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="game-con">
					<Board turn="red" board={testBoard} />
				</div>

				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
