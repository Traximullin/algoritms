func finalValueAfterOperations(operations []string) int {
	c := 0

	for _, o := range operations {
		if strings.Contains(o, "+") {
			c++
		} else {
			c--
		}
	}

	return c
}
