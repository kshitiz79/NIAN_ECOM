// components/CartItem.jsx
"use client";

import Image from "next/image";
import { Trash2, Plus, Minus } from "lucide-react";

const CartItem = ({ item, updateQty, removeFromCart, formatPrice }) => {
  return (
    <div className="flex gap-6 md:gap-10 group">
      {/* Item Image */}
      <div className="relative w-28 h-36 md:w-40 md:h-52 flex-shrink-0 bg-black/5 overflow-hidden">
        <Image
          src={item.image1}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Item Details */}
      <div className="flex flex-col flex-1 py-2 justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h2 className="text-sm md:text-base tracking-[2px] uppercase font-light">
              {item.name}
            </h2>
            <button
              onClick={() => removeFromCart(item._id)}
              className="text-black/40 hover:text-red-500 transition-colors"
              aria-label="Remove item"
            >
              <Trash2 size={16} strokeWidth={1.5} />
            </button>
          </div>
          <p className="text-[11px] text-black/50 uppercase tracking-[1px] mt-2">
            Signature Collection
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          {/* Elegant Quantity Controls */}
          <div className="flex items-center border border-black/20 w-fit">
            <button
              onClick={() => updateQty(item._id, item.qty - 1)}
              className="p-3 hover:bg-black/5 transition-colors disabled:opacity-50"
              disabled={item.qty <= 1}
            >
              <Minus size={12} strokeWidth={2} />
            </button>
            <span className="w-8 text-center text-xs tracking-[2px]">
              {item.qty}
            </span>
            <button
              onClick={() => updateQty(item._id, item.qty + 1)}
              className="p-3 hover:bg-black/5 transition-colors"
            >
              <Plus size={12} strokeWidth={2} />
            </button>
          </div>

          {/* Line Item Total */}
          <p className="text-sm tracking-[1px]">
            {formatPrice(item.price * item.qty)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;