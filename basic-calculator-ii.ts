function calculate(s: string): number {
  const operations = new Set(["+", "-", "*", "/"]);

  let num: number = 0;
  let lastOperand: number = 0;
  let op = "+";
  let result: number = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (operations.has(char)) {
      op = char;
    } else if (char >= "0" && char <= "9") {
      num = num * 10 + Number(char);

      if (i === s.length - 1 || s[i + 1] < "0" || s[i + 1] > "9") {
        if (op === "+") {
          lastOperand = num;
          result += lastOperand;
        } else if (op === "-") {
          lastOperand = -num;
          result += lastOperand;
        } else if (op === "*") {
          result -= lastOperand;
          lastOperand *= Number(num);
          result += lastOperand;
        } else if (op === "/") {
          result -= lastOperand;
          lastOperand = Math.trunc(lastOperand / num);
          result += lastOperand;
        }

        num = 0;
      }
    }
  }

  return result;
}
