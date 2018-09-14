/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  /* your logic here...*/
  let res = [];
  arr.forEach(function (item) {
    if (isFinite(item) ) {
      res.push(item);
    }
  });
  return Math.max(...res);
};

export default max;
