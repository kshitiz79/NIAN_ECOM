export default function Login() {
  return (
    <div className="max-w-md mx-auto mt-20 px-6">
      <h1 className="text-3xl mb-6">Login</h1>

      <input placeholder="Email" className="border p-3 w-full mb-4" />
      <input placeholder="Password" type="password" className="border p-3 w-full mb-4" />

      <button className="btn-gold w-full">Login</button>
    </div>
  );
}