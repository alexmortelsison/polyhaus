import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="">
      <Image
        src="/hero.png"
        alt="hero"
        fill
        className="object-cover -z-50 brightness-60"
      />
      <div className="pt-72 items-center text-center z-10">
        <h1 className="text-white tracking-tighter text-9xl font-bold w-[800px] mx-auto">
          Design. Build. Fabrication.
        </h1>
        <p className="text-xl font-semibold text-gray-300 w-[600px] mx-auto pt-2 tracking-tighter">
          We transform bold ideas into reality—designing, building, and
          fabricating with unmatched precision and passion.
        </p>
        <div className="pt-8 max-w-lg mx-auto">
          <Button className="px-16 bg-[#a2f7ff] text-gray-700 py-4 cursor-pointer shadow hover:bg-[#a2f7ff] hover:opacity-90">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
