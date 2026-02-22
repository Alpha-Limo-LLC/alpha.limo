import config from "./config";
import React from 'react';
import Image from "next/image";
import Logo from "../public/assets/images/logo.svg";
import Slogan  from "./ai";
import Fade from '@mui/material/Fade';
import Link from "next/link";

export const dynamic = 'force-dynamic';
export const maxDuration = 30;

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
          loading="eager"
          width={250}
          height={250}
          priority
        ></Image>
        <div className="flex items-center gap-6 mt-10">
          <h1 className="text-center text-5xl font-extrabold text-black">
            {ALPHA_SHORT}
          </h1>
        </div>
        <div className="flex items-center mt-10">
          <Fade in={true} timeout={1000}>
            <h3 className="text-center text-md text-black">
              &quot;{SLOGAN}&quot;
            </h3>
          </Fade>
        </div>
        <div className="text-center static bottom-0 text-sm mt-10">
          <Link className="text-normal no-underline hover:none visited:none text-black" href={ALPHA_URL} target="_blank">
            &copy; {ALPHA_YEAR} {ALPHA_FULL}
          </Link>
        </div>
      </main>
    </div>
  );
}
