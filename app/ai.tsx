import { smoothStream, streamText } from 'ai';

async function generateSlogan() {
  try {
    const { text } = await streamText({
      model: 'openai/gpt-4.1-mini',
      system:
        'You are a professional business owner. ' +
        'You write simple, clear, and concise content.',
      prompt: 'Generate one short quote for a limousine service',
      experimental_transform: smoothStream(),
    });
    return text;
  } catch (error) {
    console.error('Error generating slogan:', error);
    throw error;
  }
}

export default generateSlogan;