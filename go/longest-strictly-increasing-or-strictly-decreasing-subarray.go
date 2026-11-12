func longestMonotonicSubarray(nums []int) int {
	var output, mn, mx int = 1, 1, 1

	for i := 1; i < len(nums); i++ {
		if nums[i] > nums[i-1] {
			mx++
			mn = 1
		} else if nums[i] < nums[i-1] {
			mn++
			mx = 1
		} else {
			mx = 1
			mn = 1
		}

		output = max(output, mx, mn)
	}

	return output
}
