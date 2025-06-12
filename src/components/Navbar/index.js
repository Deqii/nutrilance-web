"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-sm px-6 py-4 md:px-24 fixed w-full top-0 z-50">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black">Nutrilance</h1>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex gap-8 text-black font-medium">
          <Link href="/">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#faq">FAQ</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-black font-medium">
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="#services" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="#faq" onClick={toggleMenu}>
            FAQ
          </Link>
          <Link href="/login" onClick={toggleMenu}>
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
