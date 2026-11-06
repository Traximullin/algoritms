func maxFreqSum(s string) int {
	v, c := make([]int, 26), make([]int, 26)
	for _, r := range s {
		switch r {
		case 'a', 'e', 'i', 'o', 'u':
			v[int(r-'a')]++
		default:
			c[int(r-'a')]++
		}
	}
	return slices.Max(v) + slices.Max(c)
}
