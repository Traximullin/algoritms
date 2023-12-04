{
    function min(arr, toReturn) {
        const min = Math.min(...arr)

        return toReturn === 'value' ? min : arr.indexOf(min)
    }

    console.log(min([1,2,3,4,5], 'index'))
}