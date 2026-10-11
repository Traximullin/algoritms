func sumOfSquares(nums []int) int {
	r := 0
	l := len(nums)
	i := 1

	for _, v := range nums {
		if l%i == 0 {
			r += v * v
		}
		i++
	}

	return r
}
