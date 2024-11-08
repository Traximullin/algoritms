function finalValueAfterOperations(operations: string[]): number {
    let count = 0;
  
    for (let operation of operations) 
      if (operation[1] === "-")
        count--;
      else 
        count++;
  
    return count;
}