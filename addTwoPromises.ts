{
    const addTwoPromises = async function(promise1, promise2) {
       const data = await Promise.all([promise1,promise2])

       return data.reduce((prev,curr) => prev + curr,0)
    };

    addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log); // 4
}