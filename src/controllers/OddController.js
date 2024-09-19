import { countOddNumberService } from "../services/Odd.service.js";
export const genOdd = (req, res) => {
  const { input } = req.body;

  const result = countOddNumberService(input);

  return res.status(200).json({ data: result });
};
