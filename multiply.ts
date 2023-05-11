{
    const multiply = (a,b) => {
        const c = parseInt(a) * parseInt(b)
        const d = +c.toString().split("e")[1]

        const i = 10 * d

        console.log(Math.pow(c,i))
        const log10Y = Math.log(c) * i / Math.log(10)

        const Y = Math.floor(log10Y)
        const x = log10Y - b
        console.log(x)
        return 
      }

    console.log(multiply("58608473622772837728372827", "7586374672263726736374"))
}