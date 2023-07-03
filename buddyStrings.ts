{

    /*
        TODO
        https://leetcode.com/problems/buddy-strings/description/
    */
   
    const buddyStrings = function(s, goal) {
        let count = 0 
        let result = ""
        
        for(let i = 0; i < goal.length; i++) {
            if(goal[i] !== s[i]) {
                result = goal[i] + result 
                goal = goal.substring(0,i) + "-" + goal.substring(i + 1)
            }
        }

        for(let i = 0; i < goal.length; i++) {
            if(goal[i] === "-") {
                goal = goal.replace("-", result[count])
                count++
            }
        }


        return goal === s
    };

    console.log(buddyStrings("abab", "abba"))
    console.log(buddyStrings("ab", "ab"))
    console.log(buddyStrings("aa", "aa"))
}