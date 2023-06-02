{
    const groupAnagrams = function(strs) {
        const result: string[] = []       
        const new_array = strs.map(elem => elem.toLowerCase().split("").sort().join("")).sort()
        console.log(new_array)
        console.log(strs)
    }

    console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
}