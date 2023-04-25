{
    const solution = (firstArray: number[], secondArray: number[]) => {

        const result  = firstArray.map((elem,index) => (elem - secondArray[index]) ** 2)

        return (result.reduce((prev,curr) => prev + curr,0) / firstArray.length)

    }

}