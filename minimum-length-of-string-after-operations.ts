{
    function minimumLength(s: string): number {
        const chars = new Array(26).fill(0);
    
        for (const char of s) {
            chars[char.charCodeAt(0) - 97]++;
        }
    
        return chars.reduce((length, count) => {
            if (count > 0)
                length += 2 - count % 2;
            
            return length;
        }, 0);
    }

    console.log(minimumLength("ucvbutgkohgbcobqeyqwppbxqoynxeuuzouyvmydfhrprdbuzwqebwuiejoxsxdhbmuaiscalnteocghnlisxxawxgcjloevrdcj"))

}