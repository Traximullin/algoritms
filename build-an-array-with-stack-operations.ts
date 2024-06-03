{
    function buildArray(target: number[], n: number): string[] {
        let result = [];
        let index = 0;

        for (let i = 1; i <= n && index < target.length; i++) {
            
            if (target[index] === i) {
                result = [...result, 'Push']
                index += 1;
            } else {
                result = [...result, 'Push', "Pop"]
            }

        }


        return result
    };

    console.log(buildArray([1,3], 3))
}