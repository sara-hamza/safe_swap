const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.chatWithAI = async (req, res) => {
  const { messages } = req.body;
  if (!Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array required' });
  }
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages,
    });
    const content = completion.data.choices[0].message.content;
    res.json({ content });
  } catch (err) {
    console.error('OpenAI chat error', err.message);
    res.status(500).json({ error: 'Failed to generate chat response' });
  }
};

exports.generateSummary = async (req, res) => {
  const { messages } = req.body;
  if (!Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array required' });
  }
  try {
    const prompt = `Summarize the following patient conversation for a doctor, ` +
      `highlighting symptoms, mood, and any red flags:`;
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: prompt },
        { role: 'user', content: JSON.stringify(messages) },
      ],
    });
    const summary = completion.data.choices[0].message.content;
    res.json({ summary });
  } catch (err) {
    console.error('OpenAI summary error', err.message);
    res.status(500).json({ error: 'Failed to generate summary' });
  }
};
