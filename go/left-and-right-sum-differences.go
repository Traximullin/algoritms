func leftRightDifference(nums []int) []int {
	n := len(nums)
	left := make([]int, n)
	right := make([]int, n)
	ans := make([]int, n)

	for i := 1; i < n; i++ {
		left[i] = left[i-1] + nums[i-1]
	}

	for i := n - 2; i >= 0; i-- {
		right[i] = right[i+1] + nums[i+1]
	}

	for i := 0; i < n; i++ {
		if left[i] > right[i] {
			ans[i] = left[i] - right[i]
		} else {
			ans[i] = right[i] - left[i]
		}
	}

	return ans
}
