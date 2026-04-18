"use client";

import { useState } from "react";

export default function FilterBar() {
  const [activeSort, setActiveSort] = useState("Recommended");
  const [activeSize, setActiveSize] = useState("All Sizes");

  const sortOptions = ["Recommended", "Price: Low to High", "Price: High to Low", "Newest"];
  const sizes = ["All Sizes", "XS", "S", "M", "L", "XL"];

  return (
    <div className="bg-[var(--color-bg)] border-b border-black/5 py-4 px-6 md:px-12 sticky top-[72px] z-40">
      <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4">
        
        {/* Left: Filters */}
        <div className="flex items-center gap-6 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[2px] font-semibold text-black/40">Sort:</span>
            <select 
              className="bg-transparent text-[11px] uppercase tracking-[1px] border-none focus:ring-0 cursor-pointer"
              value={activeSort}
              onChange={(e) => setActiveSort(e.target.value)}
            >
              {sortOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 border-l border-black/10 pl-6">
            <span className="text-[10px] uppercase tracking-[2px] font-semibold text-black/40">Size:</span>
            <select 
              className="bg-transparent text-[11px] uppercase tracking-[1px] border-none focus:ring-0 cursor-pointer"
              value={activeSize}
              onChange={(e) => setActiveSize(e.target.value)}
            >
              {sizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Right: Product Count */}
        <div className="text-[10px] uppercase tracking-[2px] text-black/40">
          Showing 48 Products
        </div>
      </div>
    </div>
  );
}
