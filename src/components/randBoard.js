// get random number of from min to max
function get_random(Min, Max) {
	return Math.floor(Math.random() * (Max - Min + 1)) + Min;
}
//checks whether we can place a valid
//fossil given a starting x and y position
function isvalid(board, horizontal, x, y, fossil_size, board_size) {
	if (horizontal) {
		if (x + fossil_size >= board_size) return false;
		for (var i = x; i < x + fossil_size; i++) {
			if (
				board[y][i].fossil === true ||
				(y - 1 >= 0 && board[y - 1][i].fossil === true) || // to ensure that fossils do not "touch each other"
				(y + 1 < board_size && board[y + 1][i].fossil === true)
			)
				return false;
		}
		if (
			(x - 1 >= 0 && board[y][x - 1].fossil === true) ||
			(x + fossil_size < board_size &&
				board[y][x + fossil_size].fossil === true)
		)
			return false;
	} else {
		//////////////////////////////
		if (y + fossil_size >= board_size) return false;
		for (var i = y; i < y + fossil_size; i++) {
			if (
				board[i][x].fossil === true ||
				(x - 1 >= 0 && board[i][x - 1].fossil === true) || // to ensure that fossils do not "touch each other"
				(x + 1 < board_size && board[i][x + 1].fossil === true)
			)
				return false;
		}
		if (
			(y - 1 >= 0 && board[y - 1][x].fossil === true) ||
			(y + fossil_size < board_size &&
				board[y + fossil_size][x].fossil === true)
		)
			return false;
	}
	return true;
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

export { setFossil, isvalid };
