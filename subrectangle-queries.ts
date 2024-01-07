{
    class SubrectangleQueries {
        rectangle: number[][];

        constructor(rectangle: number[][]) {
            this.rectangle = rectangle
        }

        getValue(row: number, col: number): number {
            return this.rectangle[row][col]
        }

        updateSubrectangle<T extends number>(row1: T, col1: T, row2: T, col2: T, newValue: T): void {
            for(let i = row1; i <= row2; i++) {

                for (let j = col1; j <= col2; j++) {
                    this.rectangle[i][j] = newValue
                }

            }
        }
    }
}