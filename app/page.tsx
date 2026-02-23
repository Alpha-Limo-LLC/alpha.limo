import config from "./config";
import Slogan  from "./ai";
import Logo from "../public/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Grow from '@mui/material/Grow';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

export default function Alpha() {
  const ALPHA_FULL = config.site_name_full;
  const ALPHA_SHORT = config.site_name_short;
  const ALPHA_YEAR = config.site_year;
  const ALPHA_URL = config.site_url;
  const SLOGAN = Slogan();
  return (
    <div className="flex justify-center align-center items-center w-full h-full bg-white">
      <main className="flex flex-col justify-center items-center my-50">
        <Image
          src={Logo}
          alt={ALPHA_FULL}
          quality={100}
          preload={true}
          loading="eager"
          width={250}
          height={250}
        ></Image>
        <div className="flex items-center gap-6 mt-10">
          <h1 className="text-center text-5xl font-extrabold text-black">
            {ALPHA_SHORT}
          </h1>
        </div>
        <div className="flex items-center mt-10">
          <Grow
            in={true}
            timeout={1000}>
            <h3 className="text-center text-md text-black">
              &ldquo;{SLOGAN}&rdquo;
            </h3>
          </Grow>
        </div>
        <div className="text-center static bottom-0 text-sm mt-10">
          <Link
            className="text-normal no-underline hover:none visited:none text-black"
            href={ALPHA_URL}
            target="_blank">
            &copy; {ALPHA_YEAR} {ALPHA_FULL}
          </Link>
        </div>
      </main>
    </div>
  );
}
