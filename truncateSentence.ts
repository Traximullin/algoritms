{
    const truncateSentence = function(s, k) {
        return s.split(" ").splice(0,k).join(" ")
    };

    console.log(truncateSentence("Hello how are you Contestant", 4))
}