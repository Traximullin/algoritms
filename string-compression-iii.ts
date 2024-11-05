{
    function compressedString(word: string): string {
        let r='';
        let c = 1;
    
        for(let i = 0; i < word.length; i++){
        
            if(word[i] == word[i+1] && c < 9){
                c++;
                continue;
            }
        
            r += c + word[i];
            c = 1;
        }

        return r;
    };

    console.log(compressedString('ааааааааааааабб'))
}