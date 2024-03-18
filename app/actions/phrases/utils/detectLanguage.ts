const detectLanguage = async (textForDetection: string) => {
  const detectedLanguage = await fetch(
    `${process.env.NEXT_PUBLIC_GOOGLE_API_BASE_URL}/detect?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ q: [textForDetection] }),
    },
  );

  if (detectedLanguage.ok) {
    const data = await detectedLanguage.json();
    return data.data.detections[0][0].language;
  } else {
    throw new Error("Could not find detected language");
  }
};

export default detectLanguage;
