// get random number of from min to max
function get_random(Min, Max) {
	return Math.floor(Math.random() * (Max - Min + 1)) + Min;
}

//creates a fossil on the board
const setFossil = (board, horizontal, x, y, fossilSize) => {
	if (horizontal) {
		for (var i = x; i < x + fossilSize; i++) {
			board[i][y].fossil = true;
		}
	} else {
		for (var i = y; i < y + fossilSize; i++) {
			board[i][y].fossil = true;
		}
	}
};

export default setFossil;
