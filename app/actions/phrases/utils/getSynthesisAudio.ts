const getSynthesisAudio = async (inputText: string) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      synthinput: {
        text: inputText,
        ssml: "string",
      },
      voiceparams: {
        languageCode: "ga-IE",
        name: "ga_UL_anb_nemo",

        ssmlGender: "UNSPECIFIED",
      },
      audioconfig: {
        audioEncoding: "LINEAR16",
        speakingRate: 1,
        pitch: 1,
        volumeGainDb: 1,
        htsParams: "string",
        sampleRateHertz: 0,
        effectsProfileId: [],
      },
      outputType: "JSON",
    }),
    timeout: 10000,
  };

  try {
    const response = await fetch(
      "https://api.abair.ie/v3/synthesis",
      requestOptions,
    );
    const data = await response.json();
    return data.audioContent;
  } catch (error) {
    console.log("error in getTranslation:", error);
    return false;
  }
};

export default getSynthesisAudio;
