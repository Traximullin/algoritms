{
    function displayTable(orders: string[][]): string[][] {
        const test = {};

        const foods = new Set<string>();

        for (const order of orders) {
            const [_, table, food] = order;

            const current_food_value = (test?.[table]?.[food] || 0) + 1;

            foods.add(food);

            test[table] = {
                ...test[table],
                [food]: current_food_value,
            }
        }

        const sorted_foods = ['Table', ...Array.from(foods).sort()];

        const result: string[][] = [];

        for (const key in test) {
            const row = [key];

            for (let i = 1; i < sorted_foods.length; i++) {
                const value: number = test[key][sorted_foods[i]] || 0;
                
                row.push(value.toString())
            }

            result.push(row)
        }


        return [
            sorted_foods,
            ...result,
        ]
    };

    console.log(displayTable([["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]))
}