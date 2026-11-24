func kidsWithCandies(candies []int, extraCandies int) []bool {
	max := slices.Max(candies)

	r := make([]bool, len(candies))

	for i, v := range candies {
		if v+extraCandies >= max {
			r[i] = true
		} else {
			r[i] = false
		}
	}

	return r
}
