import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <Image
        src={"/hero.png"}
        alt="hero"
        fill
        className="object-cover w-full h-[500px] -z-50"
      />
    </div>
  );
}
