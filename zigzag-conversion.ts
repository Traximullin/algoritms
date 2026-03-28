function convert(s: string, numRows: number): string {
  if (numRows <= 1) return s;

  let direction = 1;
  let rowIndex = 0;

  const rows = new Array(numRows).fill("");
  insertCharsIntoEachRow: for (let i = 0; i < s.length; i++) {
    const char = s[i];

    rows[rowIndex] += char;

    rowIndex += direction;

    if (rowIndex === 0 || rowIndex === numRows - 1) {
      direction *= -1;
    }
  }

  const result = rows.join("");
  return result;
}
