func getSneakyNumbers(nums []int) []int {
    ans := make([]int, 0, 2)
    cnts := make(map[int]int)
    for _, num := range nums {
        cnts[num]++
        if cnts[num] == 2 {
            ans = append(ans, num)
        }
    }
    return ans
}
