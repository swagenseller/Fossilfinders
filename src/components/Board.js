import "../css/board.css";

export default function Board(props) {
	const styleTile = (item) => {
		if (item.visible) {
			return item.fossil ? "found" : "miss";
		}
		return "enemyTile";
	};
	/*
	arr : 2d array 
	returns a copy of a 2d array
	*/
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
	// Helper function for deepCopy to deal with Objects
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
		const newArr = deepCopy(props.enemy);
		newArr[item.row][item.col] = newItem;
		//const newPlayer = deepCopy(props.player);
		props.setOneGrid(props.player);
		props.setTwoGrid(newArr);
		props.setTurn(props.turn === "P1" ? "P2" : "P1");
		props.setPlaying(false);
		if (item.fossil) {
			let newScore = { ...props.score };
			newScore[props.turn]++;
			props.setScore(newScore);
		}
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
									onClick={() => {
										if (!subItems.visible) handleClick(subItems);
									}}
								></td>
							);
						} else {
							if (subItems.visible) {
								if (subItems.fossil) {
									return <td key={subItems.id} className="found"></td>;
								}
								return <td key={subItems.id} className="miss-player"></td>;
							}
							if (subItems.fossil) {
								return <td key={subItems.id} className="fossil"></td>;
							}
						}
						return <td /*onClick={() => test(grid[index][sIndex])}*/> </td>;
					})}
				</tr>
			);
		});
	};

	return (
		<div>
			<table>
				<tbody>{displayGrid(props.enemy, true)}</tbody>
			</table>
			<table>
				<tbody>{displayGrid(props.player)}</tbody>
			</table>
		</div>
	);
}
