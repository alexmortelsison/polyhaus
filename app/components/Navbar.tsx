import Image from "next/image";
import Link from "next/link";

import NavAccordion from "./NavAccordion";

export default function Navbar() {
  return (
    <nav className="bg-gray-800/30 backdrop-blur-md">
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
            <p className="text-3xl font-semibold tracking-tighter">Polyhaus</p>
          </div>
        </Link>
        <NavAccordion />
        <div></div>
      </div>
    </nav>
  );
}
