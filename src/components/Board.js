import { useEffect, useState } from "react";
import "../css/board.css";

export default function Board(props) {
	const [turn, setTurn] = useState(props.turn);

	const [topGrid, setTopGrid] = useState(props.board);
	const [bottomGrid, setBottomGrid] = useState(props.board);

	const styleTile = (item) => {
		if (item.visible) {
			return item.fossil ? "found" : "miss";
		}
		return "enemyTile";
	};

	const deepCopy = (arr) => {
		let copy = [];
		arr.forEach((elem) => {
			if (Array.isArray(elem)) {
				copy.push(deepCopy(elem));
			} else {
				if (typeof elem === "object") {
					copy.push(deepCopyObject(elem));
				} else {
					copy.push(elem);
				}
			}
		});
		return copy;
	};
	// Helper function to deal with Objects
	const deepCopyObject = (obj) => {
		let tempObj = {};
		for (let [key, value] of Object.entries(obj)) {
			if (Array.isArray(value)) {
				tempObj[key] = deepCopy(value);
			} else {
				if (typeof value === "object") {
					tempObj[key] = deepCopyObject(value);
				} else {
					tempObj[key] = value;
				}
			}
		}
		return tempObj;
	};

	const handleClick = (item) => {
		let newItem = {
			...item,
			visible: true,
		};
		const newArr = deepCopy(topGrid);
		newArr[item.row][item.col] = newItem;
		setTopGrid(newArr);
	};

	const displayGrid = (grid, enemy) => {
		return grid.map((items, index) => {
			return (
				<tr>
					{items.map((subItems, sIndex) => {
						if (enemy) {
							return (
								<td
									key={subItems.id}
									className={styleTile(subItems)}
									onClick={() => handleClick(subItems)}
								></td>
							);
						} else if (subItems.fossil == true) {
							return <td key={subItems.id} className="found"></td>;
						}
						return <td /*onClick={() => test(grid[index][sIndex])}*/> </td>;
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
