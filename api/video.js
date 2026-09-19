import { InferenceClient } from "@huggingface/inference";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const { prompt } = req.body || {};

    if (!prompt) {
      return res.status(400).json({ error: "Falta la descripción del video" });
    }

    const client = new InferenceClient(process.env.HF_TOKEN);

    const video = await client.textToVideo({
      provider: "fal-ai",
      model: "Wan-AI/Wan2.2-TI2V-5B",
      inputs: prompt
    });

    const buffer = Buffer.from(await video.arrayBuffer());

    res.setHeader("Content-Type", "video/mp4");
    res.setHeader("Content-Length", buffer.length);

    return res.status(200).send(buffer);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "No se pudo generar el video."
    });
  }
        }
