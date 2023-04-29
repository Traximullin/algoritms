
const sortEmotions = (arr: string[], order: boolean): string[] => {
    const emotions = {
        ":D": 0,
        ":)": 1,
        ":|": 2,
        ":(": 3,
        "T_T": 4
    }

    arr = arr.sort((a,b) => emotions[a] - emotions[b])

    return order && arr || arr.reverse()
}

console.log(sortEmotions([ ':D', 'T_T', ':D', ':(' ], true))