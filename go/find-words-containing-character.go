func findWordsContaining(words []string, x byte) []int {
	res := []int{}

	for i, w := range words {
		if strings.ContainsRune(w, rune(x)) {
			res = append(res, i)
		}
	}

	return res
}
