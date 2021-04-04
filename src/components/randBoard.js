// get random number of from min to max
function get_random(Min, Max) {
	return Math.floor(Math.random() * (Max - Min + 1)) + Min;
}

//creates a fossil on the board
//coords for the board[y][x]
const setFossil = (board, horizontal, x, y, fossilSize) => {
	if (horizontal) {
		for (var i = x; i < x + fossilSize; i++) {
			board[y][i].fossil = true;
		}
	} else {
		for (var i = y; i < y + fossilSize; i++) {
			board[i][x].fossil = true;
		}
	}
};

export default setFossil;
