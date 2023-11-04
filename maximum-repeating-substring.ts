{
    const maxRepeating = function(sequence, word) {
        if(!sequence.includes(word))
            return 0

        let quest = word;
        let result = 1;

        while(sequence.includes(quest)) {
            quest = quest + word;
            if(sequence.includes(quest))
                result += 1
        }

        return result
    };


}