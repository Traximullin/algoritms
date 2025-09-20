{
    class Speradsheet {
        private cellValues = new Map<string, number>();

        constructor(rows: number) {
        }

        setCell(cellReference: string, value: number): void {
            this.cellValues.set(cellReference, value);
        }

        resetCell(cellReference: string): void {
            this.cellValues.delete(cellReference);
        }

        getValue(formula: string): number {
            const [leftOperand, rightOperand] = formula.slice(1).split("+");
            
            const leftValue = this.parseOperand(leftOperand);
            const rightValue = this.parseOperand(rightOperand);
            
            return leftValue + rightValue;
        }

        private parseOperand(operand: string): number {
            if (this.isCellReference(operand)) {
                return this.cellValues.get(operand) ?? 0;
            } else {
                return parseInt(operand, 10);
            }
        }

        private isCellReference(operand: string): boolean {
            return operand[0] >= 'A' && operand[0] <= 'Z';
        }
    }
}