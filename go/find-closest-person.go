func findClosest(x int, y int, z int) int {
	dist := (x - y) * (x + y - 2*z)

	if dist < 0 {
		return 1
	} else if dist > 0 {
		return 2
	}

	return 0
}
