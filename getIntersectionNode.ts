{
    const getIntersectionNode = function(headA, headB) {
        let l1 = headA
        let l2 = headB
    
        while(l1 != l2){  
            if (l1) 
                l1 = l1.next 
        
            else 
                l1 = headA 
            
            if (l2) 
                l2 = l2.next 
            
            else 
                l2 = headB
        }   
    
        return l1
    };


}