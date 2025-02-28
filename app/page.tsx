import Navbar from "../components/Navbar";
import Slider from "@/components/slider";
import { Card } from "@/components/ui/apple-cards-carousel";
import Middlepart from "@/components/middlepart";
import Footer from "../components/ui/footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Middlepart />
      <Footer />

    </div>
  );
}

