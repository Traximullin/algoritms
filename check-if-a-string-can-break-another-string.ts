{
    function checkIfCanBreak(s1: string, s2: string): boolean {
        const s1_sort = s1.split('').sort();
        const s2_sort = s2.split('').sort();
    
        let s1_breaks = true;
        let s2_breaks = true;
    
        for (let i = 0; i < s1_sort.length; i++) {
            if (s1_sort[i] > s2_sort[i]) {
                s2_breaks = false;
            }
            if (s2_sort[i] > s1_sort[i]) {
                s1_breaks = false;
            }
        }
    
        return s1_breaks || s2_breaks;
    }

    console.log(checkIfCanBreak("abc", "xya"))
}