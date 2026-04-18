import ProductCard from "./ProductCard";

export default function ProductGrid({ products, title }) {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[5px] text-black/40 mb-4 block">Exclusives</span>
          <h2 className="text-4xl md:text-5xl font-light mb-4">{title || "Signature Collection"}</h2>
          <div className="w-16 h-[1px] bg-black mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="/shop" className="btn-outline">
            Discover Full Catalog
          </a>
        </div>
      </div>
    </section>
  );
}