func sumCounts(nums []int) int {
	result := 0

	for i := 0; i < len(nums); i++ {
		seen := make(map[int]struct{})

		for j := i; j < len(nums); j++ {
			seen[nums[j]] = struct{}{}
			count := len(seen)

			result += count * count
		}
	}

	return result
}
