/*
the winning score is 17 assumming 
the fossils array in creatFossils is:
[
	[1, 4],   1 * 4 = 4
	[3, 3],	  3 * 3 = 9
	[2, 2],	  2 * 2 = 4
	          4 + 9 + 4 = 17
]
*/
export default function ScoreBoard(props) {
	return (
		<div>
			<h3>
				Score: P1: {props.score.P1}, P2: {props.score.P2}
			</h3>
			{props.score.P1 === 17 && <h1>P1 WINS</h1>}
			{props.score.P2 === 17 && <h1>P2 WINS</h1>}
		</div>
	);
}
