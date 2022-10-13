const { Deepgram } = require("@deepgram/sdk");
const deepgram = new Deepgram(process.env.DEEPGRAM_API_KEY);

exports.handler = async (event) => {
  try {
    const { url } = JSON.parse(event.body);
    const { results } = await deepgram.transcription.preRecorded({ url });
    return { statusCode: 200, body: JSON.stringify(results) };
  } catch (err) {
    return { statusCode: 500, body: String(err) };
  }
};
