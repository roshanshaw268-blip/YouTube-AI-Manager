export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { topic, task, type, language } = req.body || {};

    if (!topic) {
      return res.status(400).json({ error: "Topic is required" });
    }

    // AI API will be connected here securely in the next step.
    return res.status(200).json({
      success: true,
      message: "AI backend is ready.",
      data: {
        topic,
        task,
        type,
        language
      }
    });

  } catch (error) {
    return res.status(500).json({
      error: "Server error"
    });
  }
}
