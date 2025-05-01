{
    function matrixReshape(mat: number[][], r: number, c: number): number[][] {
        const values = mat.flat();
    
        if (values.length !== r * c)
            return mat;
    
        const result = [];
    
        for (let i = 0; i < values.length; i += c)
            result.push(values.slice(i, i + c))
    
        return result
    };
}