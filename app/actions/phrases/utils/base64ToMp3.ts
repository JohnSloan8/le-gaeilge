const base64ToMp3 = (base64Audio: string) => {
  // Check if the base64 string includes a prefix
  //   const prefix = "data:audio/mpeg;base64,";
  //   if (base64Audio.startsWith(prefix)) {
  //     base64Audio = base64Audio.replace(prefix, "");
  //   }

  // Decode the Base64 string
  const binaryString = atob(base64Audio);

  // Convert the binary string to an array of bytes
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  // Create a Blob from the bytes array
  const mp3Blob = new Blob([bytes], { type: "audio/mpeg" });
  return mp3Blob;
};

export default base64ToMp3;
