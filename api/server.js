import { readFileSync } from "fs";
import { join } from "path";

export default function handler(req, res) {
  const filePath = join(process.cwd(), "data/questions.json");
  try {
    const data = JSON.parse(readFileSync(filePath, "utf8"));
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to load data" });
  }
}
