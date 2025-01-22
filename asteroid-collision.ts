{
    function helper(a: number, b: number) {
        return a * b >= 0;
    }

    function asteroidCollision(asteroids: number[]): number[] {
        const stack: number[] = [];

        for (let i = 0; i < asteroids.length; i++) {
            const x = asteroids[i];
            const y = stack[stack.length - 1];

            if (!stack.length) {
                stack.push(x);
                continue;
            }

        }

        return stack;
    };
    
    console.log(asteroidCollision([10,2,-5]))
}