{
    const canConstruct = function(ransomNote, magazine) {

        for(let i = 0; i < ransomNote.length; i++) {
            const symbIndex = magazine.indexOf(ransomNote[i])
            if(symbIndex >= 0) {
                magazine = magazine.replace(ransomNote[i], "-")
            } else {
                return false
            }
        }

        return true
    }

    console.log(canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi"))
}