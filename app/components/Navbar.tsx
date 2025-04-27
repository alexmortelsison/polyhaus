import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <nav className="bg-gray-500/30 backdrop-blur-md fixed w-full">
      <div className="max-w-[1700px] mx-auto flex justify-between items-center text-white">
        <Link href={"/"}>
          <div className="flex items-center space-x-4 py-4 hover:opacity-80">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={200}
              height={200}
              className="object-cover rounded-full w-20 h-20 shadow"
            />
            <p className="text-2xl font-bold tracking-tighter">
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
