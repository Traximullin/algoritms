{
    const findArray = function(pref) {
        const ans = new Array(pref.length)

        ans[0] = pref[0]

        for (let i = 0; i < pref.length - 1; i++) {
            ans[i + 1] = (pref[i] ^ pref[i + 1]);
        }

        return ans;
    }   

    console.log(findArray([5,2,0,3,1]))
}