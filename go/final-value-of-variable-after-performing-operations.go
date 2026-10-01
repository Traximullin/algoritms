func finalValueAfterOperations(operations []string) int {
	count := 0

	for _, operation := range operations {
		if operation[1] == '-' {
			count--
		} else {
			count++
		}
	}

	return count
}
