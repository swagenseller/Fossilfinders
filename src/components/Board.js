import { useEffect, useState } from "react";
import "../css/board.css";

const cart = [
	[
		{ visible: false, fossil: true },
		{ visible: false, fossil: false },
		{ visible: false, fossil: false },
	],
	[
		{ visible: false, fossil: false },
		{ visible: false, fossil: true },
		{ visible: false, fossil: false },
	],
];

const enemy = [
	[
		{ visible: false, fossil: true },
		{ visible: false, fossil: false },
		{ visible: false, fossil: false },
	],
	[
		{ visible: false, fossil: false },
		{ visible: false, fossil: true },
		{ visible: false, fossil: false },
	],
];

export default function Board(props) {
	const [turn, setTurn] = useState(props.turn);

	/*useEffect(() => {
		setTurn(props.turn);
	}, [props.turn]); */

	const [topGrid, setTopGrid] = useState(props.board);
	const [bottomGrid, setBottomGrid] = useState(props.board);
	/*useEffect(() => {
		setBoard(props.board);
	}, [props.board]); */

	const displayGrid = (grid, enemy) => {
		return grid.map((items, index) => {
			return (
				<tr>
					{items.map((subItems, sIndex) => {
						if (enemy) {
							return <td className="enemyTile"> </td>;
						} else if (subItems.fossil == true) {
							return <td className="found"> </td>;
						}
						return <td> </td>;
					})}
				</tr>
			);
		});
	};

	return (
		<div>
			<h1>Turn: {turn}</h1>
			<table>{displayGrid(topGrid, true)}</table>
			<table>{displayGrid(bottomGrid)}</table>
		</div>
	);
}
