export default function Checkout() {
  return (
    <div className="max-w-4xl mx-auto px-6 mt-10">
      <h1 className="text-3xl mb-6">Checkout</h1>

      <form className="grid gap-4">
        <input placeholder="Full Name" className="border p-3" />
        <input placeholder="Phone Number" className="border p-3" />
        <input placeholder="Address" className="border p-3" />
        <input placeholder="City" className="border p-3" />

        <button className="btn-gold mt-4">Place Order</button>
      </form>
    </div>
  );
}