"use client";

import { useState } from "react";
import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
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
    <div className="ml-auto">
      <nav
        className="hidden md:block mx-6 items-center space-x-3 md:space-x-6 lg:space-x-8"
      >
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              'text-md font-semibold transition-colors hover:text-black',
              route.active ? 'text-black' : 'text-neutral-500'
            )}
          >
            {route.label}
        </Link>
        ))}
      </nav>
      {/* <nav className="sm:block md:hidden flex justify-end ml-auto">
        <button onClick={toggleMenu} className="lg:hidden">
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
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              'text-md font-semibold transition-colors hover:text-black',
              route.active ? 'text-black' : 'text-neutral-500',
              'lg:hidden mt-4', isMenuOpen  ? '' : 'hidden'
            )}
          >
            {route.label}
        </Link>
        ))}
      </nav> */}
    </div>
  )
};

export default MainNav;

