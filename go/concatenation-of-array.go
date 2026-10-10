
func getConcatenation(nums []int) []int {
	n := make([]int, len(nums))
	copy(n, nums)

	for i := 0; i < len(nums); i++ {
		n = append(n, nums[i])
	}

	return n
}
