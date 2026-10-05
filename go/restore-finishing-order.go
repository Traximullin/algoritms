package main

import "slices"

func recoverOrder(order []int, friends []int) []int {
	r := []int{}

	for _, v := range order {
		if slices.Contains(friends, v) {
			r = append(r, v)
		}
	}

	return r
}

func main() {
	order := []int{3, 1, 2, 5, 4}
	friends := []int{1, 3, 4}

	recoverOrder(order, friends)
}
