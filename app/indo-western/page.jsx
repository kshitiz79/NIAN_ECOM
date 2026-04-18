import CategoryHero from "../../components/CategoryHero";
import FilterBar from "../../components/FilterBar";
import ProductCard from "../../components/ProductCard";

export default function IndoWesternCollection() {
  const products = [
    {
      _id: "iw1",
      name: "Embellished Fusion Kaftan Set",
      price: 55000,
      image1: "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?q=80&w=2000&auto=format&fit=crop",
      image2: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
    },
    {
      _id: "iw2",
      name: "Asymmetric Silk Tunic with Draped Pants",
      price: 42000,
      image1: "https://images.unsplash.com/photo-1550630982-7067d2664402?q=80&w=2000&auto=format&fit=crop",
      image2: "https://images.unsplash.com/photo-1539109132374-348214a3c239?q=80&w=2000&auto=format&fit=crop",
    },
    {
      _id: "iw3",
      name: "Hand-Block Printed Contemporary Cape",
      price: 28000,
      image1: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop",
      image2: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2000&auto=format&fit=crop",
    },
    {
      _id: "iw4",
      name: "Gilded Velvet Fusion Corset Top",
      price: 35000,
      image1: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop",
      image2: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=2000&auto=format&fit=crop",
    },
  ];

  return (
    <main className="bg-[var(--color-bg)] min-h-screen">
      <CategoryHero 
        title="Indo-Western"
        image="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2670&auto=format&fit=crop"
        description="The perfect dialogue between Eastern heritage and Western silhouettes. Bold, fusion, and avant-garde."
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