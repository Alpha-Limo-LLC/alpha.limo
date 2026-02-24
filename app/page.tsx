import config from "./src/config";
import Slogan  from "./src/ai";
import Logo from "../public/assets/images/logo.svg";
import Image from "next/image";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grow from '@mui/material/Grow';
import { grey } from '@mui/material/colors';

export const dynamic = 'force-dynamic';
export const maxDuration = 15;

export default function Alpha() {
  const ALPHA_FULL = config.site_name_full;
  const ALPHA_SHORT = config.site_name_short;
  const ALPHA_YEAR = config.site_year;
  const ALPHA_URL = config.site_url;
  const SLOGAN = Slogan();
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
                &ldquo;{SLOGAN}&rdquo;
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
            href="/assets/pdf/privacy.pdf"
            target="_blank">
              Terms of Service
          </Link>
        </div>
      </main>
    </div>
  );
}