import Navbar from "../components/Navbar";
import Slider from "@/components/slider";
import { Card } from "@/components/ui/apple-cards-carousel";
import Middlepart from "@/components/middlepart";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Middlepart />
    </div>
  );
}

