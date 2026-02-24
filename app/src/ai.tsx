import config from "./config";
import { smoothStream, streamText } from 'ai';

async function Slogan() {
  try {
    const CHATGPT_MODEL = config.chatgpt_model;
    const CHATGPT_STANCE = config.chatgpt_stance;
    const CHATGPT_MOTIVATION = config.chatgpt_motivation;
    const CHATGPT_PROMPT = config.chatgpt_prompt;
    const { text } = await streamText({
      model: CHATGPT_MODEL,
      maxOutputTokens: 50,
      temperature: 0.3,
      system:
        CHATGPT_STANCE +
        CHATGPT_MOTIVATION,
      prompt: CHATGPT_PROMPT,
      experimental_transform: smoothStream(),
    });
    const SLOGAN: string = (await text).replace(/[“”"']/g, '');
    return SLOGAN;
  } catch (error) {
    console.error('Error generating slogan:', error);
    throw error;
  }
}

export default Slogan;