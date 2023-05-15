{
    async function sleep(millis) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Good")
            }, millis)
        })
    }

    sleep(3000).then(() => {console.log('!')})
}