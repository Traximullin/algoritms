{
    const commonChars = function(words) {
        
        let res = [...words[0]]

        for(let i = 1;i<words.length;i++){

            res = res.filter(char =>{
                const l = words[i].length

                words[i] = words[i].replace(char, "");
                
                return l > words[i].length
            })

        }

        return res;
        // const result: string[] = []

        // for(let i = 0; i < words[0].length; i++) {
        //     let flag = true;

        //     for(let j = 1; j < words.length; j++) {
        //         if (!words[j].includes(words[0][i])) {
        //             flag = false
        //         } else {
        //             words[j] = words[j].replace(words[0][i],"")
        //         }
        //     }
        //     if (flag)
        //         result.push(words[0][i])
        // }

        // return result
    };

    console.log(commonChars(["cool","lock","cook"])
}