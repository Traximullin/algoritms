{
    const licenseKeyFormatting = function(s, k) {
        s = s.replaceAll("-", "").toUpperCase().split('')

        for (let i = s.length - k; i > 0; i -= k) {
            s[i] = `-${s[i]}`
        }

        return s.join("")
    };

    console.log(licenseKeyFormatting("2-5g-3-J", 2))
}