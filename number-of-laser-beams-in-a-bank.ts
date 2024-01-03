{
    function numberOfBeams(bank: string[]): number {
        let prev = 0;
        let result = 0;

        for (const row of bank) {
            const sum = row.split('').reduce((acc,cur) => acc + Number(cur), 0);

            result += sum * prev;

            prev = sum || prev;
        }

        return result
    };
}