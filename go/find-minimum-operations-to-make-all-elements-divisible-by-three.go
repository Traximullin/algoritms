func minimumOperations(nums []int) int {
	var res int
	for _, v := range nums {
		if v%3 == 0 {
			continue
		} else {
			res += 1
		}
	}
	return res
}
