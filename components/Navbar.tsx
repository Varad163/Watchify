import Image from "next/image";
import { ThemeProvider } from "./theme-providers";
import { ModeToggle } from "./Modetoggle";
import bellImage from "../Images/bell.png";

export default function Navbar() {
  return (
   <div className="flex flex-rows items-center justify-center gap-100">
      <div className="font-extrabold text-red-600 text-3xl hover:cursor-pointer">Watchify</div>
    <div className="flex flex-rows items-center justify-center gap-10">
        <li className="flex flex-row items-center gap-2 hover:cursor-pointer">Home</li>
        <li className="flex flex-row items-center gap-2 hover:cursor-pointer">TV Shows</li>
        <li className="flex flex-row items-center gap-2 hover:cursor-pointer">Movies</li>
    </div>
      <div className="w-[30px] h-[30px] flex flex-row items-center justify-center gap-10 hover:cursor-pointer">
        <Image src={bellImage} alt="bellImage" />
        <ModeToggle />
      </div>
     
   </div>
  );
}