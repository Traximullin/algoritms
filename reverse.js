{
    const reverse = a => {
        const reversed = []

        for(let i = a.length - 1; i >= 0; i--) {

            reversed.push(a[i])
        }
        return reverse
    }

    console.log(reverse([1,2,3]))
}