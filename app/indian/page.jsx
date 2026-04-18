import CategoryHero from "../../components/CategoryHero";
import FilterBar from "../../components/FilterBar";
import ProductCard from "../../components/ProductCard";

export default function IndianCollection() {
  const products = [
    {
      _id: "in1",
      name: "Heritage Banarasi Silk Saree",
      price: 185000,
      image1: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2000&auto=format&fit=crop",
      image2: "https://images.unsplash.com/photo-1610189012906-44040970d4f3?q=80&w=2000&auto=format&fit=crop",
    },
    {
      _id: "in2",
      name: "Zardozi Embroidered Lehenga",
      price: 245000,
      image1: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop",
      image2: "https://images.unsplash.com/photo-1599508419508-377fe991e16f?q=80&w=2000&auto=format&fit=crop",
    },
    {
      _id: "in3",
      name: "Royal Mughal Chikan Kurta Set",
      price: 65000,
      image1: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop",
      image2: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=2000&auto=format&fit=crop",
    },
    {
      _id: "in4",
      name: "Hand-Painted Kalamkari Saree",
      price: 95000,
      image1: "https://images.unsplash.com/photo-1610189012906-44040970d4f3?q=80&w=2000&auto=format&fit=crop",
      image2: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2000&auto=format&fit=crop",
    },
  ];

  return (
    <main className="bg-[var(--color-bg)] min-h-screen">
      <CategoryHero 
        title="Indian Collection"
        image="https://images.unsplash.com/photo-1610189012906-44040970d4f3?q=80&w=2670&auto=format&fit=crop"
        description="A tribute to timeless Indian craftsmanship, featuring rich silks, intricate zardozi, and heritage weaves."
      />

      <FilterBar />

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <button className="px-12 py-4 border border-black text-[10px] uppercase tracking-[3px] font-semibold hover:bg-black hover:text-white transition-all duration-500">
              Load More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}