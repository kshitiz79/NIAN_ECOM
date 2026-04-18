"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-blur py-3 shadow-sm border-b border-black/5" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-12">

        {/* Left Menu */}
        <nav className="hidden md:flex gap-8 text-[11px] uppercase tracking-[3px] font-medium text-black/70">
          <Link href="/indian" className={`hover:text-black transition-colors ${isActive('/indian') ? 'text-black border-b border-black pb-1' : ''}`}>Indian</Link>
          <Link href="/western" className={`hover:text-black transition-colors ${isActive('/western') ? 'text-black border-b border-black pb-1' : ''}`}>Western</Link>
          <Link href="/indo-western" className={`hover:text-black transition-colors ${isActive('/indo-western') ? 'text-black border-b border-black pb-1' : ''}`}>Indo-Western</Link>
        </nav>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-2xl md:text-3xl tracking-[8px] font-light text-black">NIAN</span>
          <span className="text-[7px] tracking-[4px] uppercase text-[var(--color-gold)] mt-[-4px]">Signature</span>
        </Link>

        {/* Right Menu */}
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[3px] font-medium text-black/70 items-center">
          <Link href="/shop" className={`hover:text-black transition-colors ${isActive('/shop') ? 'text-black border-b border-black pb-1' : ''}`}>Shop</Link>
          <Link href="/cart" className={`hover:text-black transition-colors relative ${isActive('/cart') ? 'text-black' : ''}`}>
            Cart
          </Link>
          <Link href="/profile" className={`hover:text-black transition-colors ${isActive('/profile') ? 'text-black' : ''}`}>Account</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-[var(--color-bg)] z-40 flex flex-col items-center justify-center gap-8 py-10 uppercase tracking-[4px] text-sm animate-in fade-in slide-in-from-top duration-300">
          <Link href="/indian" onClick={() => setOpen(false)}>Indian</Link>
          <Link href="/western" onClick={() => setOpen(false)}>Western</Link>
          <Link href="/indo-western" onClick={() => setOpen(false)}>Indo-Western</Link>
          <hr className="w-10 border-black/10" />
          <Link href="/shop" onClick={() => setOpen(false)}>Shop</Link>
          <Link href="/cart" onClick={() => setOpen(false)}>Cart</Link>
          <Link href="/profile" onClick={() => setOpen(false)}>Account</Link>
        </div>
      )}
    </header>
  );
}