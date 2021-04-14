import { useEffect, useState } from "react";
import "../css/playBtn.css";
export default function PlayBtn(props) {
	const [text, setText] = useState("Start Turn");
	useEffect(() => {
		if (props.score.P1 > 2 || props.score.P2 > 2) {
			setText("Play Again?");
		}
	}, [text]);
	const handleClick = () => {
		if (text === "Play Again?") {
			setText("Start Turn");
			props.newGame();
		}
		props.setPlaying(true);
	};
	return <button onClick={handleClick}>{text}</button>;
}
