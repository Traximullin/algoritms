func findMissingElements(nums []int) []int {
	min, max := 100, 0
	tot := len(nums)

	numbers := make(map[int]struct{})

	for _, v := range nums {
		if v > max {
			max = v
		}

		if v < min {
			min = v
		}

		numbers[v] = struct{}{}
	}

	diff := max - min + 1

	if tot == diff {
		return []int{}
	}

	res := make([]int, diff-tot)

	inc := 0

	for i := min; i <= max; i++ {
		if _, ok := numbers[i]; !ok {
			res[inc] = i
			inc += 1
		}
	}

	return res
}
