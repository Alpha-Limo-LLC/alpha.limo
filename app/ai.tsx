import { streamText } from 'ai';

async function generateSlogan() {
  try {
    const { text } = await streamText({
      model: 'openai/gpt-5-mini',
      prompt: 'Generate one short quote for a limousine service',
    });
    return text;
  } catch (error) {
    console.error('Error generating slogan:', error);
    throw error;
  }
}

export default generateSlogan;