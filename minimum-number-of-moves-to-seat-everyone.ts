{
    // const seat = seats.sort((a, b) => a - b)
    // const student = students.sort((a, b) => a - b)

    // return student.reduce((acc, curr, idx) => acc += Math.abs(curr - seat[idx]), 0)

    const minMovesToSeat = function(seats, students) {
        seats = seats.sort((a,b) => a - b)
        students = students.sort((a, b) => a - b)
        
        let result = 0;

        for(let i = 0; i < seats.length; i++) {
            if (students[i] === seats[i])
                continue

            const count = Math.max((students[i] - seats[i]), (seats[i] - students[i]))

            result += count
        }

        return result
    };

    console.log(minMovesToSeat([4,1,5,9],[1,3,2,6]))
}