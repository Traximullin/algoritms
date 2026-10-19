func mapWordWeights(words []string, weights []int) string {
	var results strings.Builder
	results.Grow(len(words))

	for _, word := range words {
		sum := 0

		for _, c := range word {
			sum += weights[c-'a']
		}

		mod := sum % 26
		results.WriteByte('z' - byte(mod))
	}

	return results.String()
}
