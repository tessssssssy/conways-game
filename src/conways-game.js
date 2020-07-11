function countNeighbours(arr, row, cell){
	let neighbours = 0;
	// pad the array with 0's
	if (arr[row][cell - 1] === 1) {
		neighbours += 1
	}
	if (arr[row][cell + 1]){
		neighbours += 1
	}
	if (arr[row - 1][cell] === 1){
		neighbours += 1
	}
	if (arr[row + 1][cell] === 1){
		neighbours += 1
	}
	// diagonals
	if (arr[row - 1][cell - 1] === 1) {
		neighbours += 1
	}
	if (arr[row + 1][cell + 1]){
		neighbours += 1
	}
	if (arr[row - 1][cell + 1] === 1){
		neighbours += 1
	}
	if (arr[row + 1][cell - 1] === 1){
		neighbours += 1
    }
    return neighbours
}

function conwaysGameOfLife(game) {
    const result = []
	game.unshift(Array.from(Array(game[0].length), () => 0))
	game.push(Array.from(Array(game[0].length), () => 0))
	for (let i = 0; i < game.length; i++){
		game[i].unshift(0);
		game[i].push(0)
	}
	for (let row = 1; row < game.length - 1; row++){
        result.push([])
		for (let cell = 1; cell < game[row].length -1; cell++){
            let neighbours = countNeighbours(game, row, cell)
			if (game[row][cell] === 1) {
				if (neighbours < 2 || neighbours > 3) {
                    // changeCell(game[row][cell])
					result[row - 1].push(0)
				} else {
                    result[row - 1].push(1)
                }
            } 
            
			if (game[row][cell] === 0 ){
                if ( neighbours === 3) {
                    result[row - 1].push(1)
                } else {
                    result[row - 1].push(0)
				} 
            }
		}
	}

	for (let i = 0; i < game.length; i++){
		game[i].shift();
		game[i].pop();
	}
	game.shift()
	game.pop()
    console.log(result)
	return result
}

export { countNeighbours, conwaysGameOfLife }