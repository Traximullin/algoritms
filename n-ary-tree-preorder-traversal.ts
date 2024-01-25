{
    var preorder = function(root) {
        if (!root) 
            return [];
        
        const queue =[root];
        
        const arr = [];
        
        while(queue.length){
            const node = queue.shift();

            arr.push(node.val);
            
            queue.unshift(...node.children);
    
        }

        return arr ;
    }; 
}