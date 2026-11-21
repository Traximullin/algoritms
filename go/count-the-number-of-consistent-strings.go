func countConsistentStrings(allowed string, words []string) int {
	aMap := make(map[rune]bool)
	r := 0

	for _, v := range allowed {
		aMap[v] = true
	}

	for _, word := range words {
		for _, char := range word {
			if !aMap[char] {
				r -= 1
				break
			}
		}
		r += 1
	}

	return r
}
