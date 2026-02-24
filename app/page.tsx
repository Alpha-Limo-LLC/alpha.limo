import config from "./src/config";
import OpenAI  from "./src/ai";
import Logo from "../public/assets/images/logo.svg";
import Image from "next/image";
import { Typography, Link, Grow } from '@mui/material';
import { grey } from '@mui/material/colors';

export const dynamic = 'force-dynamic';
export const maxDuration = 15;

export default function Alpha() {
  const ALPHA_FULL = config.site_name_full;
  const ALPHA_SHORT = config.site_name_short;
  const ALPHA_YEAR = config.site_year;
  const ALPHA_URL = config.site_url;
  const CHATGPT = OpenAI();
  return (
    <div>
      <main className="flex flex-col items-center w-full h-full my-50">
        <Image
          src={Logo}
          alt={ALPHA_FULL}
          quality={100}
          preload={true}
          loading="eager"
          width={250}
          height={250}
        ></Image>
        <div className="flex text-center text-5xl font-extrabold mt-10">
          <h1>
            {ALPHA_SHORT}
          </h1>
        </div>
        <div className="flex text-center mt-10">
          <Grow
            in={true}
            timeout="auto">
            <Typography
              variant="body1"
              gutterBottom
              color={grey[900]}>
                &ldquo;{CHATGPT}&rdquo;
            </Typography>
          </Grow>
        </div>
        <div className="flex text-center text-sm mt-10">
          <Link
            underline="none"
            gutterBottom
            color={grey[900]}
            href={ALPHA_URL}
            target="_blank">
              &copy; {ALPHA_YEAR} {ALPHA_FULL}
          </Link>
          &nbsp;&bull;&nbsp;
          <Link
            underline="none"
            gutterBottom
            color={grey[900]}
            href="/assets/pdf/Terms_of_Service.pdf"
            target="_blank">
              Terms of Service
          </Link>
        </div>
      </main>
    </div>
  );
}