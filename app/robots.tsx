import config from "../config.json";
import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const ALPHA_HOME = config.site_home;
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${ALPHA_HOME}/sitemap.xml`,
  }
}