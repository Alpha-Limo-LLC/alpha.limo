import config from "./config";
import { smoothStream, streamText } from 'ai';

export const dynamic = 'force-dynamic';
export const maxDuration = 30;

async function generateSlogan() {
  try {
    const CHATGPT_MODEL = config.chatgpt_model;
    const CHATGPT_STANCE = config.chatgpt_stance;
    const CHATGPT_MOTIVATION = config.chatgpt_motivation;
    const CHATGPT_PROMPT = config.chatgpt_prompt;
    const { text } = await streamText({
      model: CHATGPT_MODEL,
      system:
        CHATGPT_STANCE +
        CHATGPT_MOTIVATION,
      prompt: CHATGPT_PROMPT,
      experimental_transform: smoothStream(),
    });
    return text;
  } catch (error) {
    console.error('Error generating slogan:', error);
    throw error;
  }
}

export default generateSlogan;