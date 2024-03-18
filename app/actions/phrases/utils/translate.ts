const translate = async (
  text: string,
  languageFrom: string,
  languageTo: string,
) => {
  const translationParams = {
    q: text,
    source: languageFrom,
    target: languageTo,
    key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  };

  const translation = await fetch(
    `${process.env.NEXT_PUBLIC_GOOGLE_API_BASE_URL}?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(translationParams),
    },
  );

  if (translation.ok) {
    const data = await translation.json();
    return data.data.translations[0].translatedText;
  } else {
    throw new Error("Translation not returned by Google Translate");
  }
};

export default translate;
