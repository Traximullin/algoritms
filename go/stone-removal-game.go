func canAliceWin(n int) bool {
	pull := 10

	for n >= 0 {
		n -= pull
		pull--
	}

	return pull&1 == 0
}
