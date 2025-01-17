function doesValidArrayExist(derived: number[]): boolean {
    return !derived.reduce((pre, cur) => pre ^ cur ,0) 
};