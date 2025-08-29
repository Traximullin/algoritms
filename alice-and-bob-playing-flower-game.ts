{
    function flowerGame(n: number, m: number): number {
      return Math.floor(n / 2) * Math.ceil((m / 2)) + Math.floor(m / 2) * Math.ceil(n / 2);
    };
}