export default function Banner() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#F2EDE4]">
      {/* Subtle texture or very light model image */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1549439602-43bbcb6d948a?q=80&w=2670&auto=format&fit=crop" 
          alt="Texture" 
          className="w-full h-full object-cover mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <span className="text-[10px] uppercase tracking-[8px] text-black/50 mb-6 block">Our Philosophy</span>
        <h2 className="text-5xl md:text-7xl font-light mb-8 italic">Crafted for Elegance</h2>
        <p className="max-w-xl mx-auto text-sm md:text-base text-black/70 leading-loose tracking-wide">
          At NIAN, we believe that luxury is not just about what you wear, but how it makes you feel. 
          Every stitch is a promise of quality, and every design is a celebration of you.
        </p>
        <div className="mt-12">
          <div className="inline-block w-[1px] h-20 bg-black/20"></div>
        </div>
      </div>
    </section>
  );
}
