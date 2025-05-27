import Navbar from "../components/Navbar";
import Slider from "@/components/slider";
import { Card } from "@/components/ui/apple-cards-carousel";
import Endgame from "../images/endgame.jpg"; 
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
                        title: "Jumanji",
                        category: "Adventure",
                        content: <p>A modern reboot starring Dwayne "The Rock" Johnson, Kevin Hart, Jack Black, and Karen Gillan. Instead of a board game, Jumanji is now a video game. Four teenagers get sucked into the game and take on the avatars of their chosen characters. They must work together to complete the game’s challenges and escape back to the real world.</p>,
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
                        title: "Pokémon the Movie: The Power of Us",
                        category: "Fantasy",
                        content: <p>Pokémon the Movie: The Power of Us is the 21st movie in the Pokémon franchise and a sequel to Pokémon the Movie: I Choose You!. The story follows Ash Ketchum and Pikachu as they arrive in Fula City, where an annual Wind Festival is being held in honor of the Legendary Pokémon Lugia. However, when disasters threaten the festival and the city, Ash teams up with a diverse group of strangers—including a scientist, a timid young girl, an old woman, and a con artist—to save the day. Along the way, they learn the importance of teamwork, trust, and believing in oneself.</p>,
                    }}
                    index={2} 
                />
                <Card
                    card={{
                        src: pushpa.src,
                        title: "Pushpa: The Rise",
                        category: "Action",
                        content: <p>Pushpa: The Rise is an Indian action thriller film starring Allu Arjun as Pushpa Raj, a laborer who rises through the ranks of the red sandalwood smuggling syndicate in Andhra Pradesh. As he gains power, he faces enemies within the underworld and law enforcement, leading to intense action and gripping drama.</p>,
                    }}
                    index={3} 
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-4 justify-items-center">
                <Card
                    card={{
                        src: spiderman.src,
                        title: "The Amazing-Spiderman",
                        category: "Sci-Fi",
                        content: <p>The Amazing Spider-Man (2012) follows Peter Parker (Andrew Garfield) as he gains spider-like abilities after being bitten by a genetically altered spider. While uncovering secrets about his parents, he faces Dr. Curt Connors, who transforms into the monstrous Lizard. As Spider-Man, Peter must stop Connors from wreaking havoc on New York City while balancing his love for Gwen Stacy.</p>,
                    }}
                    index={0}
                />
                <Card
                    card={{
                        src: yjhd.src,
                        title: "Yeh jawaani hai deewani",
                        category: "Adventure",
                        content: <p>This Bollywood romantic drama follows Kabir "Bunny" Thapar (Ranbir Kapoor), a free-spirited traveler, and Naina Talwar (Deepika Padukone), a shy medical student, who reconnect years after a life-changing trip. As they navigate love, friendship, and ambitions, they must decide between chasing dreams and staying with loved ones.</p>,
                    }}
                    index={1}
                />
                <Card
                    card={{
                        src: mufasa.src,
                        title: "Mufasa",
                        category: "Animation",
                        content: <p>Mufasa: The Lion King is a prequel to The Lion King (2019), exploring the origin story of Mufasa, Simba’s father. It follows his journey from an orphaned cub to becoming the mighty King of the Pride Lands, revealing his struggles, friendships, and rise to leadership.</p>,
                    }}
                    index={2} 
                />
                <Card
                    card={{
                        src: kfpanda.src,
                        title: "Kung Fu Panda",
                        category: "Animation,Action and Comedy",
                        content: <p>Kung Fu Panda follows Po, a clumsy and food-loving panda, who dreams of becoming a kung fu master. Unexpectedly chosen as the Dragon Warrior, he must train under Master Shifu and the Furious Five to protect the Valley of Peace from the powerful villain Tai Lung. Along the way, Po discovers that true strength comes from believing in himself.</p>,
                    }}
                    index={3} 
                />
            </div>
        </div>
    );
}

