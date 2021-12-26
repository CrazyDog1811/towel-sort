
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) return [];
  const sortArr = [];
  matrix.map((el, i) => {
    if(i % 2) {
      sortArr.push(...el.reverse());
    } else {
      sortArr.push(...el);
    }
  });
  return sortArr;
}
