func numJewelsInStones(jewels string, stones string) int {
	var c int
	jewelsMap := make(map[rune]bool)

	for _, v := range jewels {
		jewelsMap[v] = true
	}

	for _, v := range stones {
		if jewelsMap[v] {
			c += 1
		}
	}

	return c
}
