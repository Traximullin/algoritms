{
    const promiseAll = async function(functions) {
        let count = 0
        const result: any = []

        return new Promise((resolve,reject) => {
            for(let i = 0; i < functions.length; i++) {
                functions[i]()
                    .then(data => {
                        result[i] = data
                        ++count === functions.length && resolve(result)
                    })
                    .catch(reject)
            }
        })


    }

    const promise = promiseAll([() => new Promise(res => res(42))])
}