// Flatning of an array till the given depth

let arr = [[1, 2], [3, [4, 5], 6], [7, 8], 9];

const flatArrr = (arr, depth) => {
  let result = [];

  arr.map((item) => {
    if (Array.isArray(item) && depth > 0) {
      result.push(...flatArrr(item, depth - 1));
    } else {
      result.push(item);
    }
  });

  return result;
};

let ans = flatArrr(arr, 2);
console.log(ans);
