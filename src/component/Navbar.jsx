export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <div className="font-bold text-xl">CleanPro</div>

      <ul className="flex gap-8 text-sm text-neutral-800">
        <li>Services</li>
        <li>Help</li>
        <li>Pricing</li>
        <li>Recyclers</li>
      </ul>

      <button className="border border-neutral-800 px-4 py-2 rounded-full text-sm">
        Get the App ▶
      </button>
    </nav>
  );
}
