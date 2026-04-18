import CategoryHero from "../../components/CategoryHero";
import FilterBar from "../../components/FilterBar";
import ProductCard from "../../components/ProductCard";

export default function WesternCollection() {
  const products = [
    {
      _id: "w1",
      name: "Ivory Silk Organza Evening Gown",
      price: 89000,
      image1: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2000&auto=format&fit=crop",
      image2: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2000&auto=format&fit=crop",
    },
    {
      _id: "w2",
      name: "Midnight Plissé Midi Dress",
      price: 45000,
      image1: "https://images.unsplash.com/photo-1539109132374-348214a3c239?q=80&w=2000&auto=format&fit=crop",
      image2: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
    },
    {
      _id: "w3",
      name: "Architectural Tailored Blazer - Sand",
      price: 32000,
      image1: "https://images.unsplash.com/photo-1594932224011-041d579af981?q=80&w=2000&auto=format&fit=crop",
      image2: "https://images.unsplash.com/photo-1598559069352-3d8437b0d42c?q=80&w=2000&auto=format&fit=crop",
    },
    {
      _id: "w4",
      name: "Sculptural Satin Slip Dress",
      price: 28000,
      image1: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
      image2: "https://images.unsplash.com/photo-1539109132374-348214a3c239?q=80&w=2000&auto=format&fit=crop",
    },
  ];

  return (
    <main className="bg-[var(--color-bg)] min-h-screen">
      <CategoryHero 
        title="Western Collection"
        image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2670&auto=format&fit=crop"
        description="Modern silhouettes meet exceptional tailoring. Minimalist designs for the contemporary wardrobe."
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