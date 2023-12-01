import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import Image from "next/image";
import MobileNav from "./mobile-nav";

const Navbar = async () => {
  const categories = await getCategories();

  return ( 
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-4 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center ml-0 lg:ml-0">
            <Image src='/ekaette-logo.png' alt='brandlogo' width={80} height={80} />
            <p className="font-bold text-2xl ml-0">Grocstack</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
          <MobileNav data={categories} />
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;