import { TransparentVerticalLogo } from "@/assets";
import { CartIcon, MenuIcon, SearchIcon } from "@/icons";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <header className="border-b border-stone-300">
        <nav className="max-w-7xl h-[60px] mx-auto flex px-6 items-center justify-between">
          {/* left */}
          <div>
            <MenuIcon size={28} />
          </div>
          {/* middle */}
          <div>
            <Image
              src={TransparentVerticalLogo}
              className="h-8 w-auto object-contain"
              alt="Salahaat Logo"
            />
          </div>
          {/* right */}
          <div className="flex space-x-3">
            <span>
              <SearchIcon size={28} />
            </span>
            <span>
              <CartIcon size={28} />
            </span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
