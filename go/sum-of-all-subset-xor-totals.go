func subsetXORSum(nums []int) int {
	return backtrack(nums, 0)
}

func backtrack(nums []int, curXor int) int {
	if len(nums) == 0 {
		return curXor
	}

	withNum := backtrack(nums[1:], curXor^nums[0])
	withoutNum := backtrack(nums[1:], curXor)

	return withNum + withoutNum
}
