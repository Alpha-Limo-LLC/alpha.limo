import { smoothStream, streamText } from 'ai'
import config from './config'

async function OpenAiText(): Promise<string> {
  try {
    const { text } = streamText({
      model: config.chatgpt_model,
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

export default OpenAiText
