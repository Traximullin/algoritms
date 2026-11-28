func findPermutationDifference(s string, t string) int {
	sum := 0
	for i, r := range s {
		for k, v := range t {
			if r == v {
				sum = sum + int(math.Abs(float64(i-k)))
			}
		}
	}
	return sum
}
