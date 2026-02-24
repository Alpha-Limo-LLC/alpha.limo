import config from "./src/config";
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const ALPHA_HOME = config.site_home;
  return [
    {
      url: ALPHA_HOME,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}