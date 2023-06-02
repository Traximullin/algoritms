{
    const strStr = function(haystack, needle) {
        // for (let [index, sym] of [...haystack].entries()) {
        //     if(sym === needle[0] && haystack.substring(index,index + needle.length) === needle) {
        //         return index
        //     }
        // }

        // return -1
        return haystack.indexOf(needle) 
    };

    console.log(strStr("sadbutsad", "sad"))
}