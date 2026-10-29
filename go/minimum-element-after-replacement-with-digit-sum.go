import "math"

func minElement(nums []int) int {
	minSum := math.MaxInt

	for _, n := range nums {
		sum := 0

		for n > 0 {
			sum += n % 10
			n /= 10
		}

		minSum = min(minSum, sum)
	}

	return minSum
}
