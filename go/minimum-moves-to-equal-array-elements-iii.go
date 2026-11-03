func minMoves(nums []int) int {
	max := slices.Max(nums)
	count := 0

	for i := 0; i < len(nums); i++ {
		if nums[i] != max {
			count += max - nums[i]
		}
	}

	return count
}
