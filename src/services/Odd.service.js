export const countOddNumberService = (arr) => {
  return arr.reduce((acc, num) => acc ^ num, 0);
};
