import { countSmileysService } from "../services/CountSmileys.service.js";
export const genCountSmile = (req, res) => {
  const { input } = req.body;

  const result = countSmileysService(input);

  return res.status(200).json({ data: result });
};
