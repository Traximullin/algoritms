{
    function greatestLetter(s: string): string {
        let letter = '';
    
        for (let i = 0; i < s.length; i++) {
            
            if (s.includes(s[i].toLowerCase()) && s.includes(s[i].toUpperCase())) {

                if (s[i].toUpperCase() > letter) {
                    letter = s[i].toUpperCase();
                }
                
            }
        }
        
        return letter;
    };

    console.log('l Ee TcOd E ')
}