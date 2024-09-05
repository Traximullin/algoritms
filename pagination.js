//1, 2, 3, ..., 5, >6<, 7, ..., 10, 11, 12
//1, 2, 3, ..., 42, >43<, 44, ..., 98, 99, 100
// 1 2 >3<  4 ... 10 11 12 
const helper = (currentPage, totalPages) => {
    const pages = [];

    if (currentPage > 1) pages.push(currentPage - 1);
    pages.push(currentPage);
    if (currentPage < totalPages) pages.push(currentPage + 1);

    return pages;
}

const test = (currentPage, totalPages) => {
    console.time()
    const startLength = Math.min(currentPage - 2, 3);
    const start = startLength > 0 ? Array.from({ length: startLength }, (_, index) => index + 1) : [];

    const endLength = Math.min(totalPages - currentPage - 1, 3);
    const end = endLength > 0 ? Array.from({ length: endLength }, (_, index) => totalPages - endLength + index + 1) : [];

    const middle = helper(currentPage, totalPages);

    const result = [...start, ...middle, ...end];

    console.timeEnd()
    return result;

};

console.log(test(1, 1000000))

 
export const pagination = (
  current,
  totalPages,
  delta = 3,
  offset = 1,
) => {
  const range = [];
  const rangeWithGape = [];
  const leftPosition = current - offset;
  const rightPosition = current + offset;
  let start;

  console.time('s')
    for (let i = 1; i <= totalPages; i += 1) {
    if (
      i <= delta ||
      i > totalPages - delta ||
      (i >= leftPosition && i <= rightPosition)
    )
      range.push(i);
  }

  for (const i of range) {
    (start && start - i === delta && rangeWithGape.push(start)) ||
      (start && i - start !== offset && rangeWithGape.push(-1));

    rangeWithGape.push(i);
    start = i;
  }
  console.log(range)
  console.log(rangeWithGape)
  console.timeEnd('s')

  return rangeWithGape;
};
console.log("pagination", pagination(1, 1000000));
