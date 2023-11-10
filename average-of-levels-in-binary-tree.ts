{
    const averageOfLevels = function(root) {
        let queue = [root];
        let array = [];
        let avg;
        let i;
        let pushArray;
        while(queue.length > 0){
            avg = 0;
            i = 0;
            pushArray = [];
            while(i < queue.length){
                avg = avg + queue[i].val;
                if(queue[i].left){
                    pushArray.push(queue[i].left);
                }
                if(queue[i].right){
                    pushArray.push(queue[i].right);
                }
                i++;
            }
            array.push(avg/queue.length);
            queue = pushArray;
        }
        return array;
    };  
}