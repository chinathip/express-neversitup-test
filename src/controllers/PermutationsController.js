import { generatePermutationsService } from "../services/Permutations.service.js";
export const genPermutations = (req, res) => {
  const { input } = req.body;

  const result = generatePermutationsService(input);

  return res.status(200).json({ data: result });
};
