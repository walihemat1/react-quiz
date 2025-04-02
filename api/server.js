import { readFileSync } from "fs";
import { join } from "path";

export default function handler(req, res) {
  try {
    const filePath = join(process.cwd(), "data/questions.json");
    const data = JSON.parse(readFileSync(filePath, "utf8"));

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(data.questions);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to load data", details: error.message });
  }
}
