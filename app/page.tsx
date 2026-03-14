import { Grow, Link, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import Image from 'next/image'
import Logo from '../public/assets/images/logo.svg'
import generateAiText from './src/ai'
import config from './src/config'

export const dynamic = 'force-dynamic'
export const maxDuration = 30

export default async function Alpha() {
  const openaiText = await generateAiText()
  return (
    <div>
      <main className="flex flex-col items-center w-full h-full my-50">
        <Image
          src={Logo}
          alt={config.site_name_full}
          quality={100}
          preload={true}
          loading="eager"
          width={250}
          height={250}
        ></Image>
        <div className="flex text-center text-5xl font-extrabold mt-10">
          <h1>{config.site_name_short}</h1>
        </div>
        <div className="flex text-center mt-10">
          <Grow in={true} timeout="auto">
            <Typography variant="body1" gutterBottom color={grey[900]}>
              &ldquo;{openaiText}&rdquo;
            </Typography>
          </Grow>
        </div>
        <div className="flex text-center text-sm mt-10">
          <Link
            underline="none"
            gutterBottom
            color={grey[900]}
            href={config.site_url}
            target="_blank"
          >
            &copy; {config.site_year} {config.site_name_full}
          </Link>
          &nbsp;&bull;&nbsp;
          <Link
            underline="none"
            gutterBottom
            color={grey[900]}
            href="/assets/pdf/Terms_of_Service.pdf"
            target="_blank"
          >
            Terms of Service
          </Link>
        </div>
      </main>
    </div>
  )
}
