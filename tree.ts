const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {value: 3}
            ]
        },
        {
            value: 4,
            children: [
                {value: 5},
                {value: 6}
            ]
        }
    ]
}

const getTreeValues = (tree) => {
    const stack = [tree]
    const result: number[] = []

    while(stack.length > 0) {
        const slice = stack.pop()
        console.log(slice)
        if(slice.value !== undefined) {
            result.push(slice.value)
        }

        if(slice.children?.length) {
            stack.push(...slice.children)
        }
    }

    return result
}

console.log(getTreeValues(tree))