import config from "./config";
import { smoothStream, streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

async function OpenAI() {
  try {
    const CHATGPT_MODEL = config.chatgpt_model;
    const CHATGPT_SYSTEM = config.chatgpt_system;
    const CHATGPT_USER = config.chatgpt_user;
    const CHATGPT_PROMPT = config.chatgpt_prompt;
    const { text } = await streamText({
      model: openai(`${CHATGPT_MODEL}`),
      maxOutputTokens: 100,
      temperature: 0.7,
      system:
        CHATGPT_SYSTEM +
        CHATGPT_USER,
      prompt: CHATGPT_PROMPT,
      experimental_transform: smoothStream(),
    });
    const CHATGPT: string = (await text).replace(/[“”"']/g, '');
    return CHATGPT;
  } catch (error) {
    console.error('Error generating slogan:', error);
    throw error;
  }
}

export default OpenAI;