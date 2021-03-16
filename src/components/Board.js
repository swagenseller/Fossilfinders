import { useEffect, useState } from "react";

export default function Board(props) {
	const [turn, setTurn] = useState();

	useEffect(() => {
		setTurn(props.turn);
	}, [props.turn]);

	return (
		<div>
			<h1>Turn: {turn}</h1>
		</div>
	);
}
