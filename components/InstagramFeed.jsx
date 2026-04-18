export default function InstagramFeed() {
  const feed = [
    { id: 1, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop" },
    { id: 2, image: "https://images.unsplash.com/photo-1550630982-7067d2664402?q=80&w=2000&auto=format&fit=crop" },
    { id: 3, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2000&auto=format&fit=crop" },
    { id: 4, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop" },
    { id: 5, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop" },
    { id: 6, image: "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?q=80&w=2000&auto=format&fit=crop" },
  ];

  return (
    <section className="section-padding bg-[var(--color-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-light">Follow Our Journey</h2>
            <p className="text-xs tracking-[2px] text-black/40 mt-2 uppercase">@NIAN_SIGNATURE</p>
          </div>
          <a href="https://instagram.com" className="text-[10px] uppercase tracking-[3px] font-semibold border-b border-black pb-1">
            Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {feed.map((item) => (
            <div key={item.id} className="aspect-square overflow-hidden relative group">
              <img 
                src={item.image} 
                alt="Instagram Feed" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-[8px] tracking-[2px] uppercase">View Post</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
