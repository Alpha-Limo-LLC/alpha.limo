import config from "./config";
import Image from "next/image";
import Logo from "../public/assets/images/logo.svg";
import generateSlogan  from "./ai";
import Fade from '@mui/material/Fade';
import Link from "next/link";

export default function Alpha() {
  const ALPHA_FULL = config.site_name_full;
  const ALPHA_SHORT = config.site_name_short;
  const ALPHA_YEAR = config.site_year;
  const SLOGAN = generateSlogan();
  return (
    <div className="flex justify-center align-center items-center w-full h-full bg-white">
      <main className="w-full h-full flex flex-col justify-center items-center my-50">
        <Image
          src={Logo}
          alt={ALPHA_FULL}
          loading="eager"
          width={250}
          height={250}
          priority
        ></Image>
        <div className="flex flex-col items-center gap-6 text-center p-5">
          <h1 className="text-center text-5xl font-extrabold mt-5 text-black">
            {ALPHA_SHORT}
          </h1>
        </div>
        <div>
          <Fade in={true} timeout={1000}>
            <h3 className="text-center text-md mt-5 text-black">
              {SLOGAN}
            </h3>
          </Fade>
        </div>
        <div className="text-center static bottom-0 text-sm mt-5 p-5">
          <Link className="text-normal no-underline hover:none visited:none text-black" href="https://github.com/Alpha-Limo-LLC/alpha.limo" target="_blank">
            &copy; {ALPHA_YEAR} {ALPHA_FULL}
          </Link>
        </div>
      </main>
    </div>
  );
}
