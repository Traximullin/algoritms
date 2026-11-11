func minPartitions(n string) int {
	return int(slices.Max([]byte(n))) - 48
}
