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
    <div>
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


// components/MobileNavbar.js
// import { useState } from 'react';

// const MobileNavbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-gray-800 p-4 text-white">
//       <div className="flex items-center justify-between">
//         <div className="text-lg font-bold">Your Logo</div>
//         <button onClick={toggleMenu} className="lg:hidden">
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//           </svg>
//         </button>
//       </div>
//       <div className={`lg:hidden mt-4 ${isMenuOpen ? '' : 'hidden'}`}>
//         <ul>
//           <li className="py-2">Home</li>
//           <li className="py-2">About</li>
//           <li className="py-2">Services</li>
//           <li className="py-2">Contact</li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default MobileNavbar;

// components/MobileNavbar.js
// import { useState } from 'react';

// const MobileNavbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       {/* Overlay background */}
//       <div
//         className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 ${isMenuOpen ? '' : 'hidden'}`}
//         onClick={toggleMenu}
//       ></div>

//       {/* Mobile Navbar */}
//       <nav className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-300`}>
//         <div className="p-4">
//           <div className="text-lg font-bold mb-4">Your Logo</div>
//           <button onClick={toggleMenu} className="text-white">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//         </div>
//         <div className="mt-4">
//           <ul>
//             <li className="py-2">Home</li>
//             <li className="py-2">About</li>
//             <li className="py-2">Services</li>
//             <li className="py-2">Contact</li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default MobileNavbar;
