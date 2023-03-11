import { TransparentVerticalLogo } from "@/assets";
import { CartIcon, MenuIcon, SearchIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="border-b border-stone-300">
        <nav className="max-w-7xl h-[60px] mx-auto flex px-6 items-center justify-between">
          {/* left */}
          <Link href="/">
            <Image
              src={TransparentVerticalLogo}
              className="h-8 w-auto object-contain"
              alt="Salahaat Logo"
            />
          </Link>
          {/* right */}
          <div className="flex space-x-5">
            <span className="flex flex-col justify-center items-center">
              <SearchIcon size={24} />
              <p className="text-xs text-stone-600">Search</p>
            </span>
            <span className="flex flex-col justify-center items-center">
              <CartIcon size={24} />
              <p className="text-xs text-stone-600">Cart</p>
            </span>
            <span className="flex flex-col justify-center items-center">
              <MenuIcon size={24} />
              <p className="text-xs text-stone-600">Menu</p>
            </span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
