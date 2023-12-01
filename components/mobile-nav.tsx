"use client";

import { useState } from "react";
import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MobileNav: React.FC<MainNavProps> = ({
  data
}) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <div>
      <nav className="sm:block md:hidden flex justify-end ml-auto">
        <button onClick={toggleMenu} className="lg:hidden ml-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div className={`flex flex-col fixed top-0 left-0 w-48 h-full pt-8 px-8 z-40 bg-gray-100 ${isMenuOpen ? '' : 'hidden' } space-y-10`} onClick={toggleMenu}>
            {routes.map((route) => (
            <Link
                key={route.href}
                href={route.href}
                onClick={toggleMenu}
                className={cn(
                'text-md font-semibold transition-colors hover:text-black',
                route.active ? 'text-black' : 'text-black',
                'lg:hidden', isMenuOpen  ? '' : 'hidden',
                ' opacity-80 transform'
                )}
            >
                {route.label}
            </Link>
            ))}
        </div>
      </nav>
    </div>
  )
};

export default MobileNav;
