import Image from "next/image";
import Link from "next/link";

export default function CategorySection() {
  const categories = [
    { 
      name: "Indian", 
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2000&auto=format&fit=crop", 
      link: "/indian",
      description: "Timeless traditions, modern elegance"
    },
    { 
      name: "Western", 
      image: "https://images.unsplash.com/photo-1539109132374-348214a3c239?q=80&w=2000&auto=format&fit=crop", 
      link: "/western",
      description: "Chic designs for the modern woman"
    },
    { 
      name: "Indo-Western", 
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop", 
      link: "/indo-western",
      description: "The perfect fusion of cultures"
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-[9px] uppercase tracking-[4px] text-black/50 font-medium mb-4 block">
              The Collections
            </span>
            <h2 className="text-4xl md:text-5xl font-extralight tracking-[4px] uppercase text-black mb-4">
              Curated Edit
            </h2>
            <p className="text-xs md:text-sm text-black/60 tracking-wide leading-relaxed font-serif italic">
              Explore our meticulously crafted collections, where every piece tells a story of craftsmanship and modern luxury.
            </p>
          </div>
          
          <Link 
            href="/shop" 
            className="group relative text-[10px] uppercase tracking-[3px] font-semibold text-black flex items-center gap-2 pb-2"
          >
            <span>Discover All</span>
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black/20"></span>
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-500 ease-out group-hover:w-full"></span>
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {categories.map((cat, i) => (
            <Link key={i} href={cat.link} className="group flex flex-col cursor-pointer">
              
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-black/5">
                <img
                  src={cat.image}
                  alt={`${cat.name} Collection`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating "Discover" Text on Hover */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <span className="bg-white/90 backdrop-blur-sm text-black px-6 py-2 text-[9px] uppercase tracking-[3px] font-medium">
                    Explore
                  </span>
                </div>
              </div>
              
              {/* Text Content Below Image */}
              <div className="mt-8 flex flex-col items-center text-center">
                <h3 className="text-xl md:text-2xl font-light tracking-[6px] uppercase text-black mb-3">
                  {cat.name}
                </h3>
                <p className="text-[10px] uppercase tracking-[2px] text-black/50 font-medium">
                  {cat.description}
                </p>
              </div>
              
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}