import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-black">
      
      {/* Background Image with Slow Pan/Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2670&auto=format&fit=crop"
          alt="NIAN Luxury Fashion Campaign"
          fill
          priority
          className="object-cover hero-zoom"
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlay for Depth and Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/20 to-black/60 flex flex-col items-center justify-center text-center text-white px-6">
        
        {/* Main Content Group with Fade-In */}
        <div className="max-w-2xl flex flex-col items-center hero-fade-up">
          <span className="text-[9px] uppercase tracking-[8px] mb-6 text-white/70 font-medium">
            Est. 2024
          </span>
          
          <h1 className="text-7xl md:text-9xl mb-4 font-extralight tracking-[24px] mr-[-24px]">
            NIAN
          </h1>
          
          <p className="italic font-serif tracking-[4px] text-xs md:text-sm mb-12 text-white/80">
            The Signature of Luxury
          </p>

          <Link 
            href="/shop" 
            className="px-10 py-4 border border-white bg-white text-black text-[10px] uppercase tracking-[4px] font-semibold hover:bg-transparent hover:text-white transition-all duration-500 ease-out"
          >
            Explore Collection
          </Link>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-70">
        <span className="text-[8px] uppercase tracking-[4px] text-white/80">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[50%] bg-white scroll-line"></div>
        </div>
      </div>

      {/* Internal Styles for Custom High-End Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .hero-zoom {
          animation: slow-zoom 25s ease-out forwards;
        }
        
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .hero-fade-up {
          animation: fade-up 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0; /* Starts hidden before animation kicks in */
        }

        @keyframes scroll-drop {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .scroll-line {
          animation: scroll-drop 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }
      `}} />
    </section>
  );
}