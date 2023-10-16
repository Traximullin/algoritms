{
    const isPalindrome = function(head) {
        let string = '';

        while(head) {
            string += head.val
            head = head.next
        }

        return string === string.split("").reverse().join('')
    };
}