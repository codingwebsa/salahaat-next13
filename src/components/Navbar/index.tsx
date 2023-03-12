"use client";

import Image from "next/image";
import Link from "next/link";
// assets
import { TransparentVerticalLogo } from "@/assets";
// icons
import { CartIcon, HomeIcon, MenuIcon, SearchIcon } from "@/icons";
import clsx from "clsx";

interface LinkType {
  text: string;
  icon?: any;
  visibleInMobile: boolean;
  visibleInDesktop?: boolean;
}
const links: LinkType[] = [
  { text: "Home", visibleInMobile: false, visibleInDesktop: true },
  {
    text: "Search",
    visibleInMobile: true,
    visibleInDesktop: true,
    icon: SearchIcon,
  },
  {
    text: "Cart",
    visibleInMobile: true,
    visibleInDesktop: true,
    icon: CartIcon,
  },
  {
    text: "Menu",
    visibleInMobile: true,
    visibleInDesktop: false,
    icon: MenuIcon,
  },
];

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
            <span className="hidden lg:flex lg:flex-row lg:gap-2 justify-center items-center">
              <HomeIcon size={22} className="text-stone-600" />
              <p className="text-xs text-stone-600 lg:text-lg">Home</p>
            </span>
            <span className="flex flex-col lg:flex-row lg:gap-2 justify-center items-center">
              <SearchIcon size={22} className="text-stone-600" />
              <p className="text-xs font-semibold lg:font-normal text-stone-600 lg:text-lg">
                Search
              </p>
            </span>
            <span className="flex flex-col lg:flex-row lg:gap-2 justify-center items-center">
              <CartIcon size={22} className="text-stone-600" />
              <p className="text-xs font-semibold lg:font-normal text-stone-600 lg:text-lg">
                Cart
              </p>
            </span>
            <span className="flex flex-col justify-center items-center lg:hidden">
              <MenuIcon size={22} className="text-stone-600" />
              <p className="text-xs font-semibold lg:font-normal text-stone-600 lg:text-lg">
                Menu
              </p>
            </span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
