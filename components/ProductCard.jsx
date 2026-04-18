"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProductCard({ product }) {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className="group product-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link href={`/product/${product._id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-white mb-4">
          {/* Main Image */}
          <img
            src={product.image1}
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${hover && product.image2 ? 'opacity-0' : 'opacity-100'}`}
          />
          
          {/* Hover Image */}
          {product.image2 && (
            <img
              src={product.image2}
              alt={`${product.name} alternate`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${hover ? 'opacity-100' : 'opacity-0'}`}
            />
          )}

          {/* New Tag */}
          <div className="absolute top-4 left-4">
            <span className="bg-black text-white text-[8px] uppercase tracking-[2px] px-3 py-1 font-medium">New Arrival</span>
          </div>

          {/* Quick Add (Hover) */}
          <div className={`absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out`}>
            <button className="w-full py-3 bg-black text-white text-[9px] uppercase tracking-[3px] font-semibold hover:bg-[var(--color-gold)] transition-colors">
              Add to Bag
            </button>
          </div>
        </div>
      </Link>

      <div className="flex flex-col items-center text-center">
        <h3 className="text-sm font-medium tracking-[1px] mb-1">{product.name}</h3>
        <p className="text-xs text-black/50 tracking-[1px]">₹{product.price.toLocaleString()}</p>
      </div>
    </div>
  );
}