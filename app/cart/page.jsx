"use client";

import { useCart } from "../../context/CartContext";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CartItem from "../../components/CartItem"; 

export default function CartPage() {
  const { cart, removeFromCart, updateQty, isLoaded } = useCart();

  // Prevent UI flickering before localStorage is read
  if (!isLoaded) return <div className="min-h-screen bg-[var(--color-bg)]"></div>;

  // Calculate totals
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = subtotal > 0 ? (subtotal > 15000 ? 0 : 500) : 0; // Free shipping over ₹15k
  const total = subtotal + shipping;

  // Professional Currency Formatter
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  return (

<section className="py-20 relative h-screen">
  <div className=" justify-center items-center ">
<div className=" mt-96">
        
        <h1 className="text-3xl md:text-[100px] font-extralight tracking-[4px] uppercase mt-96 text-center md:text-left">
          Shopping Bag
        </h1>

        
      </div>
        </div>
</section>
  );
}



   {/* Right Column: Order Summary */}
            {/* <div className="lg:col-span-1">
              <div className="bg-black/5 p-8 flex flex-col h-fit sticky top-32">
                <h2 className="text-sm uppercase tracking-[3px] font-medium mb-8">
                  Order Summary
                </h2>

                <div className="flex flex-col gap-4 text-xs tracking-[1px] text-black/70 mb-8 border-b border-black/10 pb-8">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Complimentary" : formatPrice(shipping)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm uppercase tracking-[2px] mb-8 font-medium">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>

                <Link
                  href="/checkout"
                  className="w-full py-4 bg-black text-white text-[10px] uppercase tracking-[3px] font-semibold text-center hover:bg-white hover:text-black border border-black transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Proceed to Checkout
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
                
                <p className="text-[9px] uppercase tracking-[1px] text-black/40 mt-4 text-center">
                  Taxes included. Duties calculated at checkout.
                </p>
              </div>
            </div> */}




                      {/* Left Column: Items List */}
            // <div className="lg:col-span-2 flex flex-col gap-8 border-t border-black/10 pt-8">
            //   {cart.map((item) => (
            //     <CartItem 
            //       key={item._id} 
            //       item={item} 
            //       updateQty={updateQty} 
            //       removeFromCart={removeFromCart} 
            //       formatPrice={formatPrice} 
            //     />
            //   ))}
            // </div>




        //     {cart.length === 0 ? (
        //   <div className="flex flex-col items-center justify-center py-24 border-t border-b border-black/10">
        //     <p className="text-xs uppercase tracking-[3px] text-black/50 mb-8">
        //       Your bag is currently empty
        //     </p>
        //     <Link
        //       href="/shop"
        //       className="px-10 py-4 border border-black text-[10px] uppercase tracking-[3px] font-semibold hover:bg-black hover:text-white transition-all duration-300"
        //     >
        //       Continue Shopping
        //     </Link>
        //   </div>
        // ) : (
        //   <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
            
  
         

        //   </div>
        // )}