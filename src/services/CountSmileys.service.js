export const countSmileysService = (arr) => {
  if (arr.length === 0) return 0;
  const smileyRegex = /^[;:][~-]?[)D]$/;

  return arr.filter((face) => smileyRegex.test(face)).length;
};
