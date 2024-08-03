{
    function canAliceWin(nums: number[]): boolean {
        let one_char, two_char;

        one_char = two_char = 0;

        for (const num of nums)
            if (num <= 9)
                one_char += num
            else 
                two_char += num


        return one_char !== two_char
    };

    console.log(canAliceWin([1,2,3,4,10]))
}