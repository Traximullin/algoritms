{
    var countSeniors = function(details) {
        let counter = 0
        
        for(let i = 0; i < details.length; i++){
            if(details[i][11].concat(details[i][12]) > 60){
                counter++
            }
        }
        
        return counter
    };
}