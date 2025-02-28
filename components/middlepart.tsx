import Navbar from "../components/Navbar";
import Slider from "@/components/slider";
import { Card } from "@/components/ui/apple-cards-carousel";
import Endgame from "../images/endgame.jpg"; // Ensure correct path
import Deadpool from "../images/deadpool.jpg";
import pokemon from "../images/pokemon.jpg";
import panipat from "../images/panipat.jpg";
import pushpa from "../images/pushpa.jpg";
import spiderman from "../images/spiderman.jpg";
import yjhd from "../images/yjhd.jpg";
import mufasa from "../images/mufasa.jpg";
import kfpanda from "../images/kfpanda.jpg";
import jumanji from "../images/jumanji.jpg";

export default function Middlepart() {
    return (
        <div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-4 justify-items-center">
                <Card
                    card={{
                        src: jumanji.src,
                        title: "Avengers: Endgame",
                        category: "Marvel Movie",
                        content: <p>A legendary conclusion to the Avengers saga.</p>,
                    }}
                    index={0}
                />
                <Card
                    card={{
                        src: Deadpool.src,
                        title: "Deadpool",
                        category: "Action Comedy",
                        content: <p>The hilarious anti-hero tale of Deadpool.</p>,
                    }}
                    index={1}
                />
                <Card
                    card={{
                        src: pokemon.src,
                        title: "Avengers: Endgame",
                        category: "Marvel Movie",
                        content: <p>A legendary conclusion to the Avengers saga.</p>,
                    }}
                    index={2} 
                />
                <Card
                    card={{
                        src: pushpa.src,
                        title: "Avengers: Endgame",
                        category: "Marvel Movie",
                        content: <p>A legendary conclusion to the Avengers saga.</p>,
                    }}
                    index={3} 
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-4 justify-items-center">
                <Card
                    card={{
                        src: spiderman.src,
                        title: "Avengers: Endgame",
                        category: "Marvel Movie",
                        content: <p>A legendary conclusion to the Avengers saga.</p>,
                    }}
                    index={0}
                />
                <Card
                    card={{
                        src: yjhd.src,
                        title: "Deadpool",
                        category: "Action Comedy",
                        content: <p>The hilarious anti-hero tale of Deadpool.</p>,
                    }}
                    index={1}
                />
                <Card
                    card={{
                        src: mufasa.src,
                        title: "Avengers: Endgame",
                        category: "Marvel Movie",
                        content: <p>A legendary conclusion to the Avengers saga.</p>,
                    }}
                    index={2} 
                />
                <Card
                    card={{
                        src: kfpanda.src,
                        title: "Avengers: Endgame",
                        category: "Marvel Movie",
                        content: <p>A legendary conclusion to the Avengers saga.</p>,
                    }}
                    index={3} 
                />
            </div>
        </div>
    );
}

