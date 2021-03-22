import Board from "./Board";

const testBoard = [];
for (let i = 0; i < 8; i++) {
	testBoard.push([]);
	for (let j = 0; j < 8; j++) {
		testBoard[i].push({ visible: false, fossil: false });
	}
}

//console.log(testBoard);

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Board turn="red" board={testBoard} />
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
