import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import ProductGrid from "../components/ProductGrid";
import Banner from "../components/Banner";
import InstagramFeed from "../components/InstagramFeed";
import ExperiencePreview from "../components/ExperiencePreview";

export default function Home() {
  // Sample luxury products
  const products = [
    {
      _id: "1",
      name: "Zardozi Hand-Embroidered Leheriya Saree",
      price: 145000,
      image1: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2000&auto=format&fit=crop",
      image2: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop",
    },
    {
      _id: "2",
      name: "Ivory Silk Organza Evening Gown",
      price: 89000,
      image1: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2000&auto=format&fit=crop",
      image2: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2000&auto=format&fit=crop",
    },
    {
      _id: "3",
      name: "Velvet Heritage Sherwani - Royal Navy",
      price: 125000,
      image1: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop",
      image2: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=2000&auto=format&fit=crop",
    },
    {
      _id: "4",
      name: "Embellished Fusion Kaftan Set",
      price: 55000,
      image1: "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?q=80&w=2000&auto=format&fit=crop",
      image2: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
    },
  ];

  return (
    <main>
      <Hero />
      
      <CategorySection />
      
      <ProductGrid 
        products={products} 
        title="Signature Collection" 
      />
      
      <Banner />
      
      <ExperiencePreview />
      
      <InstagramFeed />
    </main>
  );
}