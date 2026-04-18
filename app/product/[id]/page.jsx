export default function ProductDetail() {
  const product = {
    name: "Luxury Saree",
    price: 4999,
    image: "/p1.jpg",
    desc: "Premium handcrafted design with luxury fabric.",
  };

  return (
    <div className="max-w-6xl mx-auto px-6 mt-10 grid md:grid-cols-2 gap-10">
      
      <img src={product.image} className="w-full h-[500px] object-cover" />

      <div>
        <h1 className="text-3xl mb-4">{product.name}</h1>
        <p className="text-xl mb-4">₹{product.price}</p>
        <p className="text-gray-600 mb-6">{product.desc}</p>

        <button className="btn-gold w-full">Add to Cart</button>
      </div>
    </div>
  );
}