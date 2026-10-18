func digitize(n uint64) []uint8 {
    s := strconv.FormatUint(n, 10)
    digits := make([]uint8, len(s))
    for i := 0; i < len(s); i++ {
        digits[len(s)-1-i] = s[i] - '0'
    }
    return digits
}
