// get random number of from min to max
function get_random(Min, Max) {
	return Math.floor(Math.random() * (Max - Min + 1)) + Min;
}
//checks whether we can place a valid
//fossil given a starting x and y position
// horizontal determines whether a fossil is placed horizontally or vertically
function isvalid(board, horizontal, x, y, fossil_size, board_size) {
	let i;
	if (horizontal) {
		if (x + fossil_size >= board_size) return false;
		for (i = x; i < x + fossil_size; i++) {
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
		if (y + fossil_size >= board_size) return false;
		for (i = y; i < y + fossil_size; i++) {
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
//coordinates are ordered y, x (board[y][x])
const setFossil = (board, horizontal, x, y, fossilSize) => {
	let i;
	if (horizontal) {
		for (i = x; i < x + fossilSize; i++) {
			board[y][i].fossil = true;
		}
	} else {
		for (i = y; i < y + fossilSize; i++) {
			board[i][x].fossil = true;
		}
	}
};

function createFossil(board, board_size, fossil_size) {
	var counter = 0;
	while (counter < 200) {
		counter++;
		var horizontal = Math.random() < 0.5; //random true or false
		var x = 0;
		var y = 0;
		if (horizontal) {
			x = get_random(0, board_size - fossil_size - 1);
			y = get_random(0, board_size - 1);
		} else {
			x = get_random(0, board_size - 1);
			y = get_random(0, board_size - fossil_size - 1);
		}
		if (!isvalid(board, horizontal, x, y, fossil_size, board_size)) continue; //check if it conflicts
		setFossil(board, horizontal, x, y, fossil_size);
		break;
	}
}

//create all fossils
function createFossils(board, board_size) {
	var fossils = [
		[1, 4],
		[2, 3],
		[3, 2],
	]; // first element of every pair is number of fossils, second element is length of the fossil
	for (var i = 0; i < fossils.length; i++) {
		for (var count = 0; count < fossils[i][0]; count++) {
			createFossil(board, board_size, fossils[i][1]);
		}
	}
}

export default createFossils;
