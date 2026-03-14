import type { MetadataRoute } from 'next'
import config from './src/config'

export default function robots(): MetadataRoute.Robots {
  const ALPHA_HOME = config.site_home
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${ALPHA_HOME}/sitemap.xml`,
  }
}
