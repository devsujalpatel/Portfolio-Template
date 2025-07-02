import { NavbarComp } from "@/components/Navbar";

export default function Home() {
  return (
    <main className=" mx-auto w-[56rem] dark:bg-neutral-900 bg-white h-screen relative">
      <div className="w-10 absolute h-full bg-neutral-100 dark:bg-neutral-900 -left-10 top-0 border-x border-gray-200 dark:border-neutral-800 bg-[repeating-linear-gradient(315deg,#e5e7eb_0,#e5e7eb_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed dark:bg-[repeating-linear-gradient(315deg,#27272a_0,#27272a_1px,transparent_0,transparent_50%)]" />
      <div className="">
        <div>
          <NavbarComp />
        </div>
      </div>
      <div className="w-10 absolute h-full bg-neutral-100 dark:bg-neutral-900 -right-10 top-0 border-x border-gray-200 dark:border-neutral-800 bg-[repeating-linear-gradient(315deg,#e5e7eb_0,#e5e7eb_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] bg-fixed dark:bg-[repeating-linear-gradient(315deg,#27272a_0,#27272a_1px,transparent_0,transparent_50%)]" />
    </main>
  );
}
