{
    const isIsomorphic = function(s, t) {
        if(s.length !== t.length) {
            return false
        }


        for(let i = 0; i < t.length; i++) {
            const sIndex = s.indexOf(s[i])
            const tIndex = t.indexOf(t[i])

            if(sIndex !== tIndex) 
                return false
        }

        return true
    };

    console.log(isIsomorphic("egg", "add"))
    console.log(isIsomorphic("foo", "bar"))
}