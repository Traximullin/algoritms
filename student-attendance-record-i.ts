{
    function checkRecord(s: string): boolean {
        return !s.includes("LLL") && s.indexOf("A") === s.lastIndexOf("A")
    };


    console.log(checkRecord("LLPPPLL"))
}