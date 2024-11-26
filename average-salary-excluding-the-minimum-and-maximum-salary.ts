function average(salary: number[]): number {
    const min = Math.min(...salary);
    const max = Math.max(...salary);

    let c=  0;
    let sum = 0;

    for (const sal of salary) {
        if (sal !== min && sal !== max) {
            c += 1;
            sum += sal;
        }
    }

    return sum / c;
};

console.log(average([4000,3000,1000,2000]))