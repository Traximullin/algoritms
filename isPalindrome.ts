{
    const isPalindrome = function(num: number | string): boolean {
        num = num.toString()
        return num ===  num.split("").reverse().join("")
    }

    console.log(isPalindrome(121))
    console.log(isPalindrome(133))
    console.log(isPalindrome(-121))
}