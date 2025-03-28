{

    function sameSign(a, b) {
        return a * b > 0;
    }

    function asteroidCollision(asteroids: number[]): number[] {
        const stack: number[] = [];

        for (let i = 0; i < asteroids.length; i++) {

            const prev = stack.pop() || 0;

            if (sameSign(prev, asteroids[i])) {
                stack.push(prev)
                stack.push(asteroids[i])
                continue;
            }

            if (prev > asteroids[i]) {
                stack.push(prev)
            } else {
                stack.push(asteroids[i])
            }

        }

        return stack;
    };
    
    console.log(asteroidCollision([5,10,-5]))
    console.log([8,-8])
    console.log(asteroidCollision([10,2,-5]))
}