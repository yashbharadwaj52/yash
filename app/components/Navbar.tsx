'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";


type NavItemProps = {
  href: string; // Define the type explicitly as string
  children: React.ReactNode; // ReactNode is a generic type that accepts any JSX children
};

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-center text-black z-10">
      <nav className="flex justify-around w-[75%] md:w-[60%] lg:w-[50%] space-x-1 bg-opacity-30 bg-gray-100 py-1 rounded-b-md shadow-xl hover:shadow-gray-500 hover:shadow-lg">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/packages">Packages</NavItem>
        <NavItem href="/features">Services</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="tel:+917982922261">Contact</NavItem>
      </nav>
    </div>
  );
}

function NavItem({ href, children }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div className="relative py-0">
      <Link href={href}>
        <div className="text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] relative group font-semibold">
          {children}
          <span className={`block h-0.5 transition-all duration-300 ease-out origin-center mt-1 ${isActive ? 'w-full bg-black' : 'w-0 group-hover:w-full bg-black'}`}></span>
        </div>
      </Link>
    </div>
  );
}
