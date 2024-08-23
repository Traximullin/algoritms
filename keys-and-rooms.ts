{
    function canVisitAllRooms(rooms: number[][]): boolean {
        const stack = [0];
        let visited = new Set();

        while (stack.length) {
            const key = stack.pop();

            if (visited.has(key))
                continue;

            stack.push(...rooms[key]);
            visited.add(key);
        }

        return visited.size === rooms.length;
    };


    console.log(canVisitAllRooms([[1,3],[1,4],[2,3,4,1],[],[4,3,2]]])
    // console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]))
}