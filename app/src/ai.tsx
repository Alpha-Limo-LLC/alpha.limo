import { openai } from '@ai-sdk/openai'
import { smoothStream, streamText } from 'ai'
import config from './config'

async function OpenAI() {
  try {
    const CHATGPT_MODEL = openai(`${config.chatgpt_model}`)
    const CHATGPT_SYSTEM = config.chatgpt_system
    const CHATGPT_USER = config.chatgpt_user
    const CHATGPT_TOKENS = config.chatgpt_tokens
    const CHATGPT_TEMP = config.chatgpt_temp
    const CHATGPT_PROMPT = config.chatgpt_prompt
    const { text } = await streamText({
      model: CHATGPT_MODEL,
      maxOutputTokens: CHATGPT_TOKENS,
      temperature: CHATGPT_TEMP,
      system: CHATGPT_SYSTEM + CHATGPT_USER,
      prompt: CHATGPT_PROMPT,
      experimental_transform: smoothStream(),
    })
    const CHATGPT: string = (await text).replace(/[“”"']/g, '')
    return CHATGPT
  } catch (error) {
    console.error('Error generating slogan:', error)
    throw error
  }
}

export default OpenAI
