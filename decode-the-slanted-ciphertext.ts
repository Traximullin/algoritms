function decodeCiphertext(encodedText: string, rows: number): string {
  const len = encodedText.length;
  const cols = len / rows;
  let plainText = "";

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j + i < cols && j < rows; j++) {
      const idx = j * cols + (j + i);

      plainText += encodedText[idx];
    }
  }

  return plainText.trimEnd();
}
