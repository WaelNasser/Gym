/** @format */

"use client";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { useState , useEffect } from "react";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        // detect scroll
        setHeaderActive(window.scrollY > 50);
      };

      // add scroll event
      window.addEventListener("scroll", handleScroll);

      //clear scroll event
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <header
      className={`${
        headerActive ? "h-[100px]" : "h-[124px]"
      } fixed max-w-[1920px] top-0 w-full bg-primary text-white pb-4 h-[100px] transition-all z-50`}>
      <div className=" container mx-auto h-[90px] md:h-[120px] flex justify-between items-center">
        <div>
          {/* logo */}
          <Link href="./">
            <Image
              src={"/assets/images/logo.png"}
              width={70}
              height={55}
              alt="logo"
            />
          </Link>
        </div>

        {/* MobileNav */}
        <div
          onClick={() => {
            setOpenNav(!openNav);
          }}>
          <MobileNav
            onLinkClick={() => {
              setOpenNav(!openNav);
            }}
            containerStyle={`${
              openNav
                ? "w-full bg-primary absolute top-[70px] md:top-[100px] left-0 xl:hidden flex flex-col justify-center items-center space-y-5 pb-5 uppercase border mt-5 md:mt-0 border-gray-200 pt-5"
                : "hidden overflow-hidden border-0"
            }`}
          />
        </div>

        {/* Nav */}
        <div>
          <Nav containerStyle="hidden xl:flex text-xl text-center mr-14 uppercase space-x-5" />
        </div>

        {/* Login/Register */}
        <div className="flex items-center justify-between space-x-5 text-xl">
          <Link className="hover:text-accent transition-all" href="/Login">
            <button className="text-[18px] lg:text-[22px] uppercase">
              Login
            </button>
          </Link>
          <Link className="hover:text-accent transition-all" href="/Register">
            <button className="text-[18px] lg:text-[22px] uppercase">
              Register
            </button>
          </Link>
          <button className="xl:hidden" onClick={() => setOpenNav(!openNav)}>
            <IoMenu className="text-4xl hover:text-accent" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
function setHeaderActive(arg0: boolean) {
  throw new Error("Function not implemented.");
}

