import config from "./alpha/config";
import type { MetadataRoute } from 'next'
import { grey } from '@mui/material/colors';

export default function manifest(): MetadataRoute.Manifest {
  const ALPHA_FULL = config.site_name_full;
  const ALPHA_SHORT = config.site_name_short;
  const ALPHA_DESCRIPTION = config.site_description;
  return {
    lang: 'en-US',
    name: ALPHA_FULL,
    short_name: ALPHA_SHORT,
    description: ALPHA_DESCRIPTION,
    id: '/?source=pwa',
    start_url: '/?source=pwa',
    display: 'standalone',
    background_color: grey[50],
    theme_color: grey[50],
    screenshots: [
      {
        "src": "assets/images/screenshot.png",
        "sizes": "1919x1079",
        "type": "image/png",
        "form_factor": "wide",
        "label": "Desktop screenshot"
      },
      {
        "src": "assets/images/screenshot_mobile.png",
        "sizes": "399x859",
        "type": "image/png",
        "form_factor": "narrow",
        "label": "Mobile screenshot"
      }
    ],
    icons: [
      {
        "src": "assets/icons/icon-48x48.png",
        "sizes": "48x48",
        "type": "image/png"
      },
      {
        "src": "assets/icons/icon-72x72.png",
        "sizes": "72x72",
        "type": "image/png"
      },
      {
        "src": "assets/icons/icon-96x96.png",
        "sizes": "96x96",
        "type": "image/png"
      },
      {
        "src": "assets/icons/icon-128x128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "assets/icons/icon-144x144.png",
        "sizes": "144x144",
        "type": "image/png"
      },
      {
        "src": "assets/icons/icon-152x152.png",
        "sizes": "152x152",
        "type": "image/png"
      },
      {
        "src": "assets/icons/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "assets/icons/icon-256x256.png",
        "sizes": "256x256",
        "type": "image/png"
      },
      {
        "src": "assets/icons/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png"
      },
      {
        "src": "assets/icons/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
  }
}