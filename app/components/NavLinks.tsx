"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function NavLinks() {
  const pathName = usePathname();
  return (
    <div className="md:flex space-x-8 items-center hidden">
      {navLinks.map((link) => (
        <div key={link.href} className="">
          <Link
            href={link.href}
            className={`${
              link.href === pathName
                ? "font-semibold text-[#a2f7ff]"
                : "text-gray-200 hover:underline underline-offset-4"
            }`}
          >
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
