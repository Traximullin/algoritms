const pigIt = (str:string): string => {
    return str
        .split(" ")
        .map((elem: string) => 
            elem.toLowerCase().charCodeAt(0) >= 97
            ?
            elem.substring(1,elem.length).concat(elem[0] + "ay")
            : 
            elem
        ).join(" ")
}

console.log(pigIt("Hello word"))