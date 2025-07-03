import Card from "@/components/Card";
import { TextFlip } from "@/components/TextFlip";

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
      
      <div className="w-full h-full border-t mt-5 border-b shadow-neutral-900 shadow-inner">
        <div className="m-5 border inline-block px-1 text-lg dark:bg-neutral-800 bg-neutral-300 dark:text-white">I love building things</div>
        <div>
          <Card  />
        </div>
      </div>
    </div>
  );
}
