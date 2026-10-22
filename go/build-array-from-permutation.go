func buildArray(nums []int) []int {
	res := make([]int, 0, len(nums))

	for i := 0; i < len(nums); i++ {
		res = append(res, nums[nums[i]])
	}

	return res
}
