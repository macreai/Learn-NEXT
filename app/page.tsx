import Image from "next/image";
import Hero from "./components/hero";
import Newest from "./components/newest";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      {/* @ts-expect-error Server Component */}
      <Hero />
      {/* @ts-expect-error Server Component */}
      <Newest />
    </div>
    );
}
