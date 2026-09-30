func concatWithReverse(nums []int) []int {
	n := make([]int, len(nums))
	copy(n, nums)

	for i := len(n) - 1; i >= 0; i-- {
		n = append(n, n[i])
	}

	return n
}
