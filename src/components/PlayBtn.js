export default function PlayBtn(props) {
	const handleClick = () => {
		props.setPlaying(true);
	};
	return <button onClick={handleClick}>click me play</button>;
}
