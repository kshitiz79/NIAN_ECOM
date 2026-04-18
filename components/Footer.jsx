import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 text-center md:text-left">
          {/* Brand Info */}
          <div className="md:col-span-1 border-r border-black/5 pr-4">
            <h2 className="text-3xl tracking-[8px] font-light mb-2 text-black">NIAN</h2>
            <p className="text-[9px] uppercase tracking-[4px] text-[var(--color-gold)] mb-6">Signature</p>
            <p className="text-xs text-black/50 leading-loose italic">
              "The Signature of Luxury"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[4px] font-semibold mb-8 text-black/80">Shop</h4>
            <ul className="space-y-4 text-xs tracking-wider text-black/60">
              <li><Link href="/indian" className="hover:text-black transition">Indian Wear</Link></li>
              <li><Link href="/western" className="hover:text-black transition">Western Wear</Link></li>
              <li><Link href="/indo-western" className="hover:text-black transition">Indo-Western</Link></li>
              <li><Link href="/shop" className="hover:text-black transition">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[4px] font-semibold mb-8 text-black/80">Experience</h4>
            <ul className="space-y-4 text-xs tracking-wider text-black/60">
              <li><Link href="/experience" className="hover:text-black transition">Our Story</Link></li>
              <li><Link href="/orders" className="hover:text-black transition">Track Orders</Link></li>
              <li><Link href="/shipping" className="hover:text-black transition">Shipping & Returns</Link></li>
              <li><Link href="/contact" className="hover:text-black transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[4px] font-semibold mb-8 text-black/80">Connect</h4>
            <ul className="space-y-4 text-xs tracking-wider text-black/60">
              <li><a href="#" className="hover:text-black transition">Instagram</a></li>
              <li><a href="#" className="hover:text-black transition">Pinterest</a></li>
              <li><a href="mailto:concierge@nian.com" className="hover:text-black transition font-medium">concierge@nian.com</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-black/5 pt-10 gap-6">
          <p className="text-[10px] uppercase tracking-[2px] text-black/40">© 2024 NIAN SIGNATURE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[2px] text-black/40">
            <Link href="/privacy" className="hover:text-black">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}