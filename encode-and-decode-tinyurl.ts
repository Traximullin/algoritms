{
    const hashMap = new Map()
    const URL = "https://tinyurl.com"

    const encode = function(longUrl) {
        const code = Math.random().toString(32).slice(5)

        const tinyUrl = `${URL}/${code}` 
        
        hashMap.set(tinyUrl,longUrl)
        
        return tinyUrl
    };

    const decode = function(shortUrl) {
        return hashMap.get(shortUrl)
    };
}