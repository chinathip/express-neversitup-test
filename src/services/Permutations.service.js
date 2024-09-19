export const generatePermutationsService = (str) => {
  const permutations = new Set();

  const permute = (prefix, remaining) => {
    if (remaining.length === 0) {
      permutations.add(prefix);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        const newPrefix = prefix + remaining[i];
        const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
        permute(newPrefix, newRemaining);
      }
    }
  };

  permute("", str);

  return Array.from(permutations);
};
