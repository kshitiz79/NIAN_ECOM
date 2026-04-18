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
    <section className="section-padding bg-[var(--color-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light mb-4">Curated Categories</h2>
            <p className="text-sm text-black/60 tracking-wide leading-relaxed">
              Explore our meticulously crafted collections, where every piece tells a story of craftsmanship and luxury.
            </p>
          </div>
          <Link href="/shop" className="text-[10px] uppercase tracking-[3px] font-semibold border-b border-black pb-1 hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-all">
            View All Categories
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <Link key={i} href={cat.link} className="group overflow-hidden relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
              </div>
              
              <div className="mt-6 flex flex-col items-center text-center">
                <h3 className="text-2xl font-light mb-2">{cat.name}</h3>
                <p className="text-[10px] uppercase tracking-[2px] text-black/50">{cat.description}</p>
                <div className="w-0 group-hover:w-12 h-[1px] bg-black mt-4 transition-all duration-500"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}