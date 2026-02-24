import config from '../../config.json';

type Config = {
  readonly site_home: string;
  readonly site_name_short: string;
  readonly site_name_full: string;
  readonly site_year: number;
  readonly site_url: string;
  readonly site_description: string;
  readonly chatgpt_model: string;
  readonly chatgpt_organization: string;
  readonly chatgpt_system: string;
  readonly chatgpt_user: string;
  readonly chatgpt_tokens: number;
  readonly chatgpt_temp: number;
  readonly chatgpt_prompt: string;
  readonly meta_title: string;
  readonly meta_description: string;
  readonly meta_keywords: string;
  readonly meta_author_name: string;
  readonly meta_author_url: string;
  readonly meta_creator: string;
  readonly meta_publisher: string;
};

export default config as Config;