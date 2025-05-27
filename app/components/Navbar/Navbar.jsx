"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./Modetoggle";
import {assets} from "@/assets/assets"
import Image from "next/image";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar-section mx-auto bg-white text-black flex items-center  justify-between px-6 md:px-16  shadow-2xl py-4  fixed w-full top-0 left-0">
      <div className="navbar-logo">
      <Image src={assets.logo} alt="img" className="w-30 h-10"/>
      </div>

      {/* Desktop Navigation */}
      <ul className="text-lg gap-6 hidden md:flex max-w-5xl mx-auto justify-center ">
        <li>
          <Link href="/" aria-current="page">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Portfolio</Link>
        </li>

      </ul>
      <div className="hidden md:flex">
    
          <button className="flex items-center gap-2 border-1 border-gray-400  rounded-full px-4 py-2 text-black ">Contact me <span>    <Image src={assets.arrow_icon} alt="" className="w-3 h-3"/></span></button>
      </div>
    
      <>
        <div>
          {/* Mobile menu button */}
          <button
            className="block md:hidden ml-4"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
           

          {/* Mobile menu overlay */}
          {isMenuOpen && (
            <div className="fixed right-0 top-0 w-50 z-50 bg-white  flex flex-col items-center h-screen space-y-8 md:hidden transition-all">
              <button
                className="absolute top-6 right-6 text-black"
                onClick={toggleMenu}
                aria-label="Close Menu"
              >
            
               <X/>
              </button>
          
              <ul className="flex flex-col items-center gap-8 my-10">
                <li>
                  <Link
                    href="/"
                    onClick={toggleMenu}
                    className="text-lg font-semibold text-black"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    onClick={toggleMenu}
                    className="text-lg font-semibold text-black"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#portfolio"
                    onClick={toggleMenu}
                    className="text-lg font-semibold text-black"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    onClick={toggleMenu}
                    className="text-lg font-semibold text-black"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        </>

       
    </nav>
  );
}
