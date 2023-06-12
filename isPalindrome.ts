{
    const helper = (symb) => {
        return symb.toLowerCase() === symb.toUpperCase();
    };
      
    const isPalindrome = function(str) {

    let start = 0;
    let end = str.length - 1;
    
    while (start < end) {
        const startSymb = str[start];
        const endSymb = str[end];
    
        if (helper(startSymb)) {
            start += 1;
            continue;
        }
    
        if (helper(endSymb)) {
            end -= 1;
            continue;
        }
    
        if (startSymb.toLowerCase() === endSymb.toLowerCase()) {
            start += 1;
            end -= 1;
        } else {
            return false;
        }
    }
      
    return true;
    };
      

    console.log(isPalindrome("0R"))
}