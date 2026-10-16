package main

import (
	"fmt"
	"strings"
)

func main() {
	var input string
	fmt.Scanln(&input)

	w := 0
	fmt.Sscanf(strings.TrimSpace(input), "%d", &w)

	if w > 2 && w%2 == 0 {
		fmt.Println("YES")
	} else {
		fmt.Println("NO")
	}
}
