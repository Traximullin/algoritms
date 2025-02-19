{
    function minTimeToType(word: string): number {
        let ans = 0;
        let pointer = 0;
    
        for (let i = 0; i < word.length; i++) {
            const code = word[i].charCodeAt(0) - 97;
            let moves = 1;
    
            if (pointer < code)
                moves += Math.min(code - pointer, 26 + pointer - code);
            else
                moves += Math.min(pointer - code, 26 + code - pointer);
            
            ans += moves;
            pointer = code;
        }
    
        return ans;
    }
}