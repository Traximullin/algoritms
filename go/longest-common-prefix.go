func longestCommonPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	}
	if len(strs) == 1 {
		return strs[0]
	}
	shortest := strs[0]

	for _, str := range strs {
		if len(str) < len(shortest) {
			shortest = str
		}
	}

	for i := 1; i <= len(shortest); i++ {
		prefix := shortest[:i]
		for _, str := range strs {
			if !strings.HasPrefix(str, prefix) {
				return prefix[:i-1]
			}
		}
	}
	return shortest
}
