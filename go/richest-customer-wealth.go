func maximumWealth(accounts [][]int) (max int) {
	calculateWealth := func(account []int, sumCh chan int) {
		sum := 0
		for _, val := range account {
			sum += val
		}
		sumCh <- sum
	}

	for _, account := range accounts {
		sumCh := make(chan int)
		go calculateWealth(account, sumCh)
		accountWealth := <-sumCh
		if accountWealth > max {
			max = accountWealth
		}
		close(sumCh)
	}

	return
}
