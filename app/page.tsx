import Image from "next/image";
import Alpha_Logo from "../public/assets/images/logo.svg";


export default function Alpha_Init() {
  return (
    <div className="flex justify-center align-center items-center w-full h-full">
      <main className="w-full h-160 flex flex-col justify-center items-center pt-10">
        <Image
          src={Alpha_Logo}
          alt="Alpha Limo LLC"
          width={250}
          height={250}
          priority
        ></Image>
        <div className="flex flex-col items-center gap-6 text-center p-5">
          <h1 className="text-center text-5xl font-extrabold mt-5">Alpha Limo</h1>
        </div>
        <div className="text-center static bottom-0 text-sm mt-5 p-5">
          <a className="text-normal-500 hover:none" href="https://github.com/Alpha-Limo-LLC/alpha.limo" target="_blank">
            &copy; 2026 Alpha Limo LLC
          </a>
        </div>
      </main>
    </div>
  );
}
