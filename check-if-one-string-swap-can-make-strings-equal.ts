{
    function swapCharsByIndices(str: string, arr: number[]) {
        const charArray = str.split('');
      
        for (let i = 0; i < arr.length; i += 2) {
          const index1 = arr[i];
          const index2 = arr[i + 1];
          
          if (index1 < str.length && index2 < str.length) {
            [charArray[index1], charArray[index2]] = [charArray[index2], charArray[index1]];
          }
        }
      
        return charArray.join('');
      }

    function areAlmostEqual(s1: string, s2: string): boolean {
        let c = 0;
        
        const arr: number[] = [];

        for (let i = 0; i < s1.length; i++) {
            if (s1[i] !== s2[i]) {
                c++;
                arr.push(i);
            }
        }

        if (c > 2) {
            return false;
        }

        const s2_swaps = swapCharsByIndices(s2, arr)
        
        return s1 === s2_swaps;
    };

    console.log(areAlmostEqual("qgqeg", "gqgeq"))
}