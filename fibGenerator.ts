
{
    var fibGenerator = function*() {
        let prev = 0
        let curr = 1

        yield prev
        yield curr

        for(let i = 2; i <= 50; i++) {
            const next = prev + curr
            yield next
            prev = curr
            curr = next
        }
    };

    const get = fibGenerator()

    console.log(get.next())
    console.log(get.next())
    console.log(get.next())
    console.log(get.next())
    console.log(get.next())
}