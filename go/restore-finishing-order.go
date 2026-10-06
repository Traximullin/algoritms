func recoverOrder(order []int, friends []int) []int {
	r := []int{}

	for _, v := range order {
		if slices.Contains(friends, v) {
			r = append(r, v)
		}
	}

	return r
}
