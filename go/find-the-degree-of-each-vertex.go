func findDegrees(matrix [][]int) []int {
	result := make([]int, len(matrix))

	for i, n := range matrix {
		degree := 0

		for _, v := range n {
			if v == 1 {
				degree++
			}
		}

		result[i] = degree
	}

	return result
}
