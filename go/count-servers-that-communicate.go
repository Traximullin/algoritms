func countServers(grid [][]int) int {
	count := 0
	rowCount := make([]int, len(grid))
	columnCount := make([]int, len(grid[0]))

	for i := range len(grid) {
		for j := range len(grid[0]) {
			rowCount[i] += grid[i][j]
			columnCount[j] += grid[i][j]
		}
	}

	for i := range len(grid) {
		for j := range len(grid[0]) {
			if grid[i][j] == 1 && (rowCount[i] > 1 || columnCount[j] > 1) {
				count += 1
			}
		}
	}

	return count
}
