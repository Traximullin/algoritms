{
    const findCenter = function(edges) {

        for(let i = 0; i < edges.length - 1; i++) {
            if(edges[i + 1].includes(edges[i][1])) {
                return edges[i][1]
            }
        }

        return 0 
    };

    console.log(findCenter([[1,2],[2,3],[4,2]]))
}