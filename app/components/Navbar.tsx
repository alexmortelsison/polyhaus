import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <nav className="bg-gray-500/30 backdrop-blur-md fixed w-full">
      <div className="max-w-[1700px] mx-auto flex justify-between items-center text-white">
        <Link href={"/"}>
          <div className="flex items-center py-2 hover:opacity-80">
            <Image
              src={"/logo2.png"}
              alt="logo"
              width={120}
              height={120}
              className="object-cover"
            />
            <p className="text-2xl font-bold tracking-tighter text-[#a2f7ff]">
              Polyhaus Labs Manila.
            </p>
          </div>
        </Link>
        <NavLinks />
        <div></div>
      </div>
    </nav>
  );
}
