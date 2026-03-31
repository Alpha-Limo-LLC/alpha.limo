import { Link, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import Image from 'next/image'
import Logo from '../public/assets/images/logo.svg'
import generateAiText from './src/ai'
import AnimatedQuote from './src/AnimatedQuote'
import config from './src/config'

export const dynamic = 'force-dynamic'
export const maxDuration = 30

export default async function Alpha() {
  const openaiText = await generateAiText()
  return (
    <div>
      <main className="flex flex-col items-center w-full h-full my-50">
        <Stack>
          <Image
            src={Logo}
            alt={config.site_name_full}
            quality={100}
            preload={true}
            loading="eager"
            width={250}
            height={250}
          ></Image>
        </Stack>
        <div className="flex text-center mt-10">
          <Stack>
            <Typography variant="h3" color={grey[900]}>
              {config.site_name_short}
            </Typography>
          </Stack>
        </div>
        <div className="flex text-center mt-10">
          <Stack>
            <AnimatedQuote text={openaiText} />
          </Stack>
        </div>
        <div className="flex text-center text-sm mt-10">
          <Stack>
            <Link
              underline="none"
              color={grey[900]}
              href={config.site_url}
              target="_blank"
            >
              &copy; {config.site_year} {config.site_name_full}
            </Link>
          </Stack>
        </div>
      </main>
    </div>
  )
}
