import Card from "@/components/Card";
import { TextFlip } from "@/components/TextFlip";

interface CardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const cardProps: CardProps[] = [
  {
    title: "Vergin Mojito",
    description: "A Restrount Showcase website for a restrount called Vergin Mojito",
    link: "https://verginmojito.netlify.app",
    image: "/images/mojito.png"
  },
  {
    title: "Leet Ninja",
    description: "A LeetCode like platform for developers to practice their coding skills",
    link: "https://github.com/devsujalpatel/leetlab",
    image:  "/images/mojito.png"
  },
  {
    title: "Vibe It",
    description: "An Ai Powered Web App Builder for vibe coders to create their own web apps",
    link: "https://github.com/devsujalpatel/vibe-it",
    image:  "/images/mojito.png"
  },

]



export default function Home() {
  return (
    <div>
      <div className="w-full  ml-5 mt-5">
        <div className="flex">
          <h1 className="text-4xl text-neutral-900 dark:text-neutral-100  font-bold tracking-wide">
            Sujal Patel
          </h1>
          <TextFlip />
        </div>
        <p className="w-[65%] text-zinc-500 mt-5 text-md font-medium">
          They call me Bugsy. Not because I write bugs... but because I live
          with them. I’m a software engineer with a soft spot for pixels.
        </p>
      </div>
      
      <div className="w-full h-full border-t mt-5 dark:shadow-neutral-950  shadow-inner">
        <div className="m-5 border inline-block px-1 text-lg dark:bg-neutral-800 bg-neutral-100 dark:text-white">I love building things</div>
        <div className="flex flex-wrap justify-center flex-row items-center gap-5">
          {
            cardProps.map((card: CardProps) => (
              <Card key={card.title} title={card.title} description={card.description} link={card.link} image={card.image} />
            ))
          }
        </div>
      </div>
      <div className="w-full h-full border-t mt-5 dark:shadow-neutral-950  shadow-inner">
        <div className="m-5 border inline-block px-1 text-lg dark:bg-neutral-800 bg-neutral-100 dark:text-white">Sharing knowledge as i learn</div>
          <div>
            <h3>What is </h3>
          </div>
      </div>
    </div>
  );
}
