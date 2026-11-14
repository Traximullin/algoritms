func minimumSumSubarray(nums []int, l int, r int) int {
	n := len(nums)
	preSum := make([]int, n+1)

	for i, num := range nums {
		preSum[i+1] = preSum[i] + num
	}

	minSum := math.MaxInt

	for k := l; k <= r; k++ {
		for i := 0; i+k <= n; i++ {
			sum := preSum[i+k] - preSum[i]
			if 0 < sum && sum < minSum {
				minSum = sum
			}
		}
	}

	if minSum == math.MaxInt {
		return -1
	}

	return minSum
}
