func scoreOfString(s string) int {
	sum := 0
	for i := 1; i < len(s); i++ {
		sum += abs(int(s[i-1]) - int(s[i]))
	}
	return sum
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}
