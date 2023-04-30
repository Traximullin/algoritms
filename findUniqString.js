{
    function findUniq(arr) {
        let test = arr.map(elem => elem.toLowerCase().split("").sort().join("")[0])

        const uniq = test.findIndex(elem => test.indexOf(elem) === test.lastIndexOf(elem))

        return arr[uniq]

    }
}