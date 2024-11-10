
function helper(word: string, candidates: string[]) {

    for (const candidate of candidates) {
        let c = 0;

        for (let i = 0; i < candidate.length; i++) {
            if (candidate[i] !== word[i]) 
                c += 1;
        }

        if (c <= 2)
            return true;
    }

    return false;
}   


function twoEditWords(queries: string[], dictionary: string[]): string[] {
    const result: string[] = [];

    for (const query of queries) {
        if (helper(query, dictionary))
            result.push(query)
    }

    return result;
};

console.log(twoEditWords(["word","note","ants","wood"], ["wood","joke","moat"]))