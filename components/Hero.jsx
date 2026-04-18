export default function Hero() {
  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 zoom-bg">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2670&auto=format&fit=crop"
          alt="Luxury Fashion"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white px-6">
        <div className="max-w-2xl flex flex-col items-center fade-in">
          <span className="text-[10px] uppercase tracking-[6px] mb-4 text-white/80 font-medium">Est. 2024</span>
          <h1 className="text-6xl md:text-9xl mb-4 font-extralight tracking-[20px] mr-[-20px]">
            NIAN
          </h1>
          <p className="italic tracking-[4px] text-xs md:text-sm mb-10 text-white/90">
            The Signature of Luxury
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <a href="/shop" className="px-12 py-4 bg-white text-black text-[10px] uppercase tracking-[3px] font-semibold hover:bg-black hover:text-white transition-all duration-500">
              EXPLORE COLLECTION
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[8px] uppercase tracking-[3px]">Scroll</span>
        <div className="w-[1px] h-10 bg-white animate-bounce"></div>
      </div>
    </div>
  );
}