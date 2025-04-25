import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="">
      <Image
        src={"/hero.png"}
        alt="hero"
        fill
        className="object-cover w-full h-[500px] -z-50 brightness-60"
      />
      <div className="pt-44 items-center text-center">
        <h1 className="text-white tracking-tighter text-9xl font-bold w-[800px] mx-auto">
          Design. Build. Fabrication.
        </h1>
        <p className="text-xl font-bold text-gray-300 w-[600px] mx-auto pt-2">
          We transform bold ideas into reality—designing, building, and
          fabricating modern spaces with unmatched precision and passion.
        </p>
        <div className="pt-8 max-w-lg mx-auto">
          <Button className="px-16 bg-white text-gray-700 py-4 cursor-pointer shadow">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
