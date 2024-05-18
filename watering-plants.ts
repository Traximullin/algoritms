{
    function wateringPlants(plants: number[], capacity: number): number {
        let steps = 0;
        let step_capacity = capacity;

        for (let i = 0; i < plants.length; i++) {
            if(step_capacity >= plants[i]) {
                steps += 1;
                step_capacity -= plants[i]
            }

            if (step_capacity < plants[i + 1]) {
                steps += (i + 1) * 2;
                step_capacity = capacity;
            }

        }
        
        return steps

    };

    console.log(wateringPlants([2,2,3,3], 5))
}