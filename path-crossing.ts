{
    const isPathCrossing = function(path) {
        let visited = new Set()
    
        const location = {
            x: 0,
            y: 0,
        }
    
        visited.add(`${location.x},${location.y}`)

        for (let i = 0; i < path.length; i++) {
            if (path[i] === 'N') {
                location.y += 1
            } else if (path[i] === 'S') {
                location.y -= 1
            } else if (path[i] === 'E') {
                location.x += 1
            } else if (path[i] === "W") {
                location.x -= 1
            } 
    
            const position = `${location.x},${location.y}`
    
            if (visited.has(position)) {
                return true
            }

            visited.add(position)
        }

        return false
    }

    console.log(isPathCrossing("NES"))
}