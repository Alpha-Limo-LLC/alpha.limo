import config from "./config";
import Slogan  from "./ai";
import Logo from "../public/assets/images/logo.svg";
import Image from "next/image";
import { CssBaseline } from '@mui/material';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from '@mui/material';
import { Grow } from '@mui/material';
import { grey } from '@mui/material/colors';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

export default function Alpha() {
  const ALPHA_FULL = config.site_name_full;
  const ALPHA_SHORT = config.site_name_short;
  const ALPHA_YEAR = config.site_year;
  const ALPHA_URL = config.site_url;
  const SLOGAN = Slogan();
  return (
    <div className="flex justify-center align-center w-full h-full">
      <CssBaseline />
      <Paper elevation={3} square={true} />
      <main className="flex flex-col items-center my-50">
        <Image
          src={Logo}
          alt={ALPHA_FULL}
          quality={100}
          preload={true}
          loading="eager"
          width={250}
          height={250}
        ></Image>
        <div className="flex text-5xl font-extrabold mt-10">
          <h1>
            {ALPHA_SHORT}
          </h1>
        </div>
        <div className="flex text-md font-normal mt-10">
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
        <div className="flex text-sm font-normal mt-10">
          <Link
            underline="none"
            color={grey[900]}
            href={ALPHA_URL}
            target="_blank">
              &copy; {ALPHA_YEAR} {ALPHA_FULL}
          </Link>
        </div>
      </main>
    </div>
  );
}