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

export default function Board(props) {
	const [turn, setTurn] = useState(props.turn);

	/*useEffect(() => {
		setTurn(props.turn);
	}, [props.turn]); */

	const [topGrid, setTopGrid] = useState();
	const [bottomGrid, setBottomGrid] = useState();
	/*useEffect(() => {
		setBoard(props.board);
	}, [props.board]); */

	const displayGrid = (grid) => {
		return grid.map((items, index) => {
			return (
				<tr>
					{items.map((subItems, sIndex) => {
						if (subItems.fossil == true) {
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
			<table>{displayGrid(cart)}</table>
		</div>
	);
}
