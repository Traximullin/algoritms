{
    const reverseWords = function(s) {
        return s.split(" ").map(elem => elem.split("").reverse().join("")).join(" ")
    };

    console.log(reverseWords("Let's take LeetCode contest"))
}