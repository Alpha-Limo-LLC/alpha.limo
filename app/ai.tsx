import { generateText } from 'ai';

async function generateSlogan() {
  try {
    const { text } = await generateText({
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