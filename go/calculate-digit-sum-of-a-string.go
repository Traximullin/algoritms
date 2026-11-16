func digitSum(s string, k int) string {
	for len(s) > k {
		var b strings.Builder
		for len(s) > k {
			b.WriteString(sum(s[:k]))
			s = s[k:]
		}
		b.WriteString(sum(s))
		s = b.String()
	}
	return s
}

func sum(s string) string {
	sum := 0
	for _, r := range s {
		sum += int(r - '0')
	}
	return strconv.Itoa(sum)
}
