func minOperations(nums []int, k int) int {
	var sum int

	for i := 0; i < len(nums); i++ {
		sum += nums[i]
	}

	// for _, v := range nums {
	// 	sum += v
	// }

	return sum % k
}
