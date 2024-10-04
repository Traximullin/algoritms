{
    function dividePlayers(skill: number[]): number {
        skill.sort((a,b) => a - b);
        const length = skill.length;
        const min = skill[0] + skill.at(-1)
        let c = 0;

        for (let i = 0; i < length / 2; i++) {
            const sum = skill[i] + skill[length - i - 1];

            if (sum != min) 
                return -1;

            c += skill[i] * skill[length - i - 1];
        }

        return c;
    };

    console.log(dividePlayers([3,2,5,1,3,4]))
}