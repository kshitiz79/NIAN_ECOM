import Link from "next/link";

export default function ExperiencePreview() {
  return (
    <section className="section-padding bg-black text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1605812860427-4024433a70fd?q=80&w=2000&auto=format&fit=crop" 
              alt="Luxury Packaging" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-8">
            <span className="text-[10px] uppercase tracking-[6px] text-white/40">Unboxing Excellence</span>
            <h2 className="text-5xl md:text-7xl font-light leading-tight">The NIAN Experience</h2>
            <p className="text-sm md:text-base text-white/60 leading-relaxed font-light max-w-lg">
              Every delivery is a ceremony. From our signature gold-embossed boxes to the delicate 
              hand-wrapped silk paper, we ensure that the journey of your garment is as 
              exquisite as the piece itself.
            </p>
            <ul className="space-y-4 text-[10px] uppercase tracking-[3px] text-white/80">
              <li className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[var(--color-gold)]"></span>
                Signature Gold-Embossed Box
              </li>
              <li className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[var(--color-gold)]"></span>
                Eco-Friendly Premium Wrapping
              </li>
              <li className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[var(--color-gold)]"></span>
                Handwritten Appreciation Note
              </li>
            </ul>
            <div className="pt-8">
              <Link href="/experience" className="px-10 py-4 border border-white/20 text-[10px] uppercase tracking-[4px] font-medium hover:bg-white hover:text-black transition-all">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
