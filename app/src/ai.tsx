import { openai } from '@ai-sdk/openai'
import { smoothStream, streamText } from 'ai'
import config from './config'

async function generateAiText(): Promise<string> {
  try {
    const { text } = streamText({
      model: openai(config.chatgpt_model),
      maxOutputTokens: config.chatgpt_tokens,
      temperature: config.chatgpt_temp,
      system: `${config.chatgpt_system}\n${config.chatgpt_user}`,
      prompt: config.chatgpt_prompt,
      experimental_transform: smoothStream(),
    })
    return (await text).replace(/[“”*"']/g, '')
  } catch (error) {
    console.error('Error generating ai:', error)
    throw error
  }
}

export default generateAiText
