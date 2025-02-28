import Image from "next/image";
import { ThemeProvider } from "@/components/theme-providers";
import { ModeToggle } from "@/components/Modetoggle";
import bellImage from "@/Images/bell.png";

export default function Home() {
  return (
   <div className="flex flex-rows items-center justify-center">
<div className="font-extrabold text-red-600 ">Watchify</div>
    <div className="flex flex-rows items-center justify-center gap-4">
        <li className="flex flex-row items-center gap-2">Home</li>
        <li className="flex flex-row items-center gap-2">TV Shows</li>
        <li className="flex flex-row items-center gap-2">Movies</li>
    </div>
      <div className="w-[30px] h-[30px] flex flex-row items-center justify-center">
        <Image src={bellImage} alt="bellImage" />
      </div>
    <ModeToggle />
     
   </div>
  );
}
