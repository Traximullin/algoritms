{
    class FoodRatings {
        foods: string[];
        cuisines: string[];
        ratings: number[];

        constructor(foods, cuisines, ratings) {
            this.foods = foods;
            this.cuisines = cuisines;
            this.ratings = ratings;
        }

        changeRating(food, newRating) {
            for(let i = 0; i < this.foods.length; i++) {
                if(this.foods[i] == food) {
                    this.ratings[i] = newRating
                }
            }
        }

        highestRated(cuisine) {
            let highestRated: number = 0;
            let name: string[] = [];

            for(let i = 0; i < this.cuisines.length; i++) {
                if(this.cuisines[i] == cuisine && highestRated <= this.ratings[i]) {
                    if(highestRated < this.ratings[i]) {
                        highestRated = this.ratings[i]
                        name = [this.foods[i]]
                    } else {
                        name.push(this.foods[i])
                    }
                }
            }
            name.sort();

            return name[0];
        }
        
    }   

    const test = new FoodRatings(
        ["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"], 
        ["korean", "japanese", "japanese", "greek", "japanese", "korean"], 
        [9, 12, 8, 15, 14, 7]
    )

    test.changeRating('ramen', 16)
    test.highestRated('japanese')
    console.log(test)
}