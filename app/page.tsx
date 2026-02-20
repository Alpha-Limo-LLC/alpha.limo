import Image from "next/image";
import Alpha_Logo from "../public/assets/images/logo.svg";
import generateSlogan  from "./ai";

export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export default function Alpha_Init() {
  return (
    <div className="flex justify-center align-center items-center w-full h-full bg-white">
      <main className="w-full h-full flex flex-col justify-center items-center my-50">
        <Image
          src={Alpha_Logo}
          alt="Alpha Limo LLC"
          loading="eager"
          width={250}
          height={250}
          priority
        ></Image>
        <div className="flex flex-col items-center gap-6 text-center p-5">
          <h1 className="text-center text-5xl font-extrabold mt-5 text-black">Alpha Limo</h1>
        </div>
        <div>
          <h3 className="text-center text-md mt-5 text-black">{generateSlogan()}</h3>
        </div>
        <div className="text-center static bottom-0 text-sm mt-5 p-5">
          <a className="text-normal-500 hover:none text-black" href="https://github.com/Alpha-Limo-LLC/alpha.limo" target="_blank">
            &copy; 2026 Alpha Limo LLC
          </a>
        </div>
      </main>
    </div>
  );
}
