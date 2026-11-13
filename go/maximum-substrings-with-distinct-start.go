func maxDistinct(s string) int {
	m := make(map[byte]bool)

	for _, v := range []byte(s) {
		m[v] = true
	}

	return len(m)
}
