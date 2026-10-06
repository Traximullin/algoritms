func alternatingSum(nums []int) int {
	sign := 1
	out := 0

	for _, n := range nums {
		out += n * sign
		sign *= -1
	}

	return out
}
