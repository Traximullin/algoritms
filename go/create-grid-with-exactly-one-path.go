func createGrid(m int, n int) []string {
	grid := make([]string, m)

	for i := 0; i < m; i++ {
		row := make([]byte, n)
		for j := 0; j < n; j++ {
			row[j] = '#'
			if i == 0 || j == n-1 {
				row[j] = '.'
			}
		}
		grid[i] = string(row)
	}

	return grid
}
