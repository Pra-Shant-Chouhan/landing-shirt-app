export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-12 py-6 absolute w-full z-10">
            <div className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                Clean <span className="text-white">Pro</span> <span className="w-3 h-3 bg-slate-400 rounded-full"></span>
            </div>
            <div className="flex gap-8 text-sm font-medium text-slate-600">
                <a href="#" className="hover:text-black">Services ▾</a>
                <a href="#" className="hover:text-black">Help</a>
                <a href="#" className="hover:text-black">Pricing ▾</a>
                <a href="#" className="hover:text-black">Recyclers</a>
            </div>
            <button className="border border-slate-800 rounded-full px-6 py-2 flex items-center gap-2 hover:bg-slate-50 transition">
                Get the App <span className="text-orange-500">▶</span>
            </button>
        </nav>
    );
}
