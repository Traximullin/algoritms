{
    const timeRequiredToBuy = (tickets: number[], k: number): number => {
        return tickets.reduce((sum, x, i) => {
            sum += Math.min(x, tickets[k]) - Number(i > k && x >= tickets[k]);

            return sum;
        }, 0);
    };
}