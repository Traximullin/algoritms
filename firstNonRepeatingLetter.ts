{
    const firstNonRepeatingLetter = (str:string):string => {
        const indexUniq = str
            .toLowerCase()
            .split("")
            .findIndex((elem,_,self) => self.indexOf(elem) === self.lastIndexOf(elem))

        return str[indexUniq] || ""
    }   
}