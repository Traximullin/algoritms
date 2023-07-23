{
    interface PeopleI {
        name: string
        height: number
    }

    const sortPeople = function(names, heights) {
        const people: PeopleI[] = []

        for(let i = 0; i < names.length; i++) {
            people.push({
                name: names[i],
                height: heights[i]
            })
        }

        people.sort((a,b) => b.height - a.height)

        const sortedNames = people.map(person => person.name)

        return sortedNames
    };

    console.log(sortPeople(["Mary","John","Emma"],[180,165,170]))
}