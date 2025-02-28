import Navbar from "../components/Navbar";
import Slider from "@/components/slider";
import { Card } from "@/components/ui/apple-cards-carousel";
import Endgame from "../images/endgame.jpg"; // Ensure correct path
import Deadpool from "../images/deadpool.jpg";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <div className="flex gap-4 p-4">
        <Card
          card={{
            src: Endgame.src, // Ensure you are passing a valid `src`
            title: "Avengers: Endgame",
            category: "Marvel Movie",
            content: <p>A legendary conclusion to the Avengers saga.</p>,
          }}
          index={0}
        />
        <Card
          card={{
            src: Deadpool.src, // Ensure correct `src`
            title: "Deadpool",
            category: "Action Comedy",
            content: <p>The hilarious anti-hero tale of Deadpool.</p>,
          }}
          index={1}
        />
      </div>
    </div>
  );
}
