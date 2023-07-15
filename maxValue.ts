{
    /* 
        !TODO
        https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/
    */
    const generateKey = (start,end) => {
        return `${start}-${end}`
    }

    const maxValue = function(events, k) {
        const map = {

        }

        for(let i = 0; i < events.length; i++) {
            const [start, end, value] = events[i]

            const mapKeys = Array.from(Object.keys(map))

            console.log(mapKeys)
            console.log(start)
            console.log(map)
            map[generateKey(start,end)] = value
        }

        console.log(map)
    };

    console.log(maxValue([[1,2,4],[3,4,3],[2,3,1]],2))
}