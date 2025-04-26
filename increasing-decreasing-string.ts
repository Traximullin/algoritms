{
    function sortString(s: string): string {
        const letters = new Array(26).fill(0); 
        for(let i = 0; i < s.length; i++) letters[s.charCodeAt(i) - 97]++
    
        const res = [];
        while(res.length < s.length){
            for(let i = 0; i < 26; i++){
                if(letters[i] > 0){
                    res.push(String.fromCharCode(i + 97));
                    letters[i]--
                }
            }
            
            for(let i = 25; i >= 0; i--){
                if(letters[i] > 0){
                    res.push(String.fromCharCode(i + 97));
                    letters[i]--
                }
            }
        }
    
        return res.join("");
    };
}