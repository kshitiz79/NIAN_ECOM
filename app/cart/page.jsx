"use client";

import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQty } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-6 mt-10">
      <h1 className="text-3xl mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-10">
          {/* Items */}
          <div className="md:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex gap-4 border-b pb-4"
              >
                <img
                  src={item.image1}
                  className="w-24 h-24 object-cover"
                />

                <div className="flex-1">
                  <h2>{item.name}</h2>
                  <p className="text-gray-500">
                    ₹{item.price}
                  </p>

                  <input
                    type="number"
                    value={item.qty}
                    min={1}
                    onChange={(e) =>
                      updateQty(item._id, Number(e.target.value))
                    }
                    className="border px-2 py-1 mt-2 w-16"
                  />

                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 text-sm ml-4"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="border p-6 h-fit">
            <h2 className="text-xl mb-4">Summary</h2>
            <p className="mb-4">Total: ₹{total}</p>

            <a href="/checkout" className="btn-gold w-full text-center block">
              Proceed to Checkout
            </a>
          </div>
        </div>
      )}
    </div>
  );
}