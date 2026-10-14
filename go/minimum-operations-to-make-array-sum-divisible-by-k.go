func minOperations(nums []int, k int) int {
	return sum(nums) % k
}

func sum(nums []int) int {
	sum := 0
	for _, n := range nums {
		sum += n
	}
	return sum
}
