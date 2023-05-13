{
    var inorderTraversal = function*(arr) {
        arr = arr.flat(Infinity)
        for (let i = 0; i < arr.length; i++) {
            yield arr[i]
        };
    };

    const gen = inorderTraversal([[[6]],[1,3],[]]);
    console.log(gen.next())
    console.log(gen.next())
    console.log(gen.next())
    console.log(gen.next().done)

}