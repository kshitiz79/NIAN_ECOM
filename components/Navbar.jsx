"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, User } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const isActive = (path) => pathname === path;

  // Reusable NavLink component for consistent animations
  const NavLink = ({ href, children }) => (
    <Link 
      href={href} 
      className={`relative group py-1 transition-colors duration-300 ${
        isActive(href) ? "text-black" : "hover:text-black"
      }`}
    >
      {children}
      <span 
        className={`absolute left-0 bottom-0 h-[1px] bg-black transition-all duration-300 ease-out ${
          isActive(href) ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500  px-10 ${
          scrolled 
            ? "bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-black/5" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-12">

          {/* Left Menu */}
          <nav className="hidden md:flex flex-1 gap-8 text-[11px] uppercase tracking-[3px] font-medium text-black justify-center">
            <NavLink href="/indian">Indian</NavLink>
            <NavLink href="/western">Western</NavLink>
            <NavLink href="/indo-western">Indo-Western</NavLink>
          </nav>

          {/* Logo (Centered) */}
          <div className="flex-none flex flex-col items-center justify-center">
            <Link href="/" className="flex flex-col items-center group">
              <span className="text-2xl md:text-3xl tracking-[8px] font-light text-black transition-transform duration-500 group-hover:scale-105">
                NIAN
              </span>
              <span className="text-[7px] tracking-[4px] uppercase text-[#D4AF37] mt-[-2px]">
                Signature
              </span>
            </Link>
          </div>

          {/* Right Menu */}
          <div className="hidden md:flex flex-1 justify-end gap-8 text-[11px] uppercase tracking-[3px] font-medium text-black/60 items-center">
            <NavLink href="/shop">Shop</NavLink>
            
            <Link 
              href="/profile" 
              className={`hover:text-black transition-colors ${isActive('/profile') ? 'text-black' : ''}`}
              aria-label="Account"
            >
              <User strokeWidth={1.5} size={18} />
            </Link>

            <Link 
              href="/cart" 
              className={`hover:text-black transition-colors relative ${isActive('/cart') ? 'text-black' : ''}`}
              aria-label="Cart"
            >
              <ShoppingBag strokeWidth={1.5} size={18} />
              {/* Optional Cart Badge */}
              <span className="absolute -top-1 -right-1.5 bg-black text-white text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex-1 flex justify-end md:hidden">
            <button
              className="p-2 -mr-2 text-black/80 hover:text-black transition-colors"
              onClick={() => setOpen(true)}
              aria-label="Open Menu"
            >
              <Menu strokeWidth={1.5} size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[80vw] max-w-sm bg-white z-50 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button 
            onClick={() => setOpen(false)}
            className="p-2 text-black/60 hover:text-black transition-colors"
            aria-label="Close Menu"
          >
            <X strokeWidth={1.5} size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 px-10 py-8 text-[12px] uppercase tracking-[4px] font-medium text-black/70">
          <Link href="/indian" onClick={() => setOpen(false)} className="hover:text-black transition-colors">Indian</Link>
          <Link href="/western" onClick={() => setOpen(false)} className="hover:text-black transition-colors">Western</Link>
          <Link href="/indo-western" onClick={() => setOpen(false)} className="hover:text-black transition-colors">Indo-Western</Link>
          
          <hr className="w-12 border-black/10 my-4" />
          
          <Link href="/shop" onClick={() => setOpen(false)} className="hover:text-black transition-colors">Shop</Link>
          
          <div className="flex gap-6 mt-8">
            <Link href="/profile" onClick={() => setOpen(false)} className="flex items-center gap-3 hover:text-black transition-colors">
              <User strokeWidth={1.5} size={20} />
            </Link>
            <Link href="/cart" onClick={() => setOpen(false)} className="flex items-center gap-3 hover:text-black transition-colors relative">
              <ShoppingBag strokeWidth={1.5} size={20} />
              <span className="absolute -top-1 -right-1.5 bg-black text-white text-[8px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}