{
    const maximumNumberOfStringPairs = function(words) {
        let result = 0

        while (words.length) {
            let item = words.shift();
            item = item[1] + item[0];

            if (words.includes(item))
                result++
        }

        return result
    };
}