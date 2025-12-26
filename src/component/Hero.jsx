import Navbar from "./Navbar";
import StatsCard from "./StatsCard";
import BottomBar from "./BottomBar";

export default function Hero() {
    return (
        <section className="w-[1200px] h-[680px] hero-gradient hero-radius hero-shadow relative overflow-hidden">
            <Navbar />

            <main className="container mx-auto px-12 pt-32 pb-40 relative">
                {/* Stars */}
                <div className="flex gap-1 mb-4 text-yellow-400 text-xl">
                    {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>

                {/* Headline */}
                <h1 className="text-7xl font-medium text-white drop-shadow-sm leading-[0.9] max-w-2xl relative z-50 text-start">
                    The New Level of Care for Your Wardrobe
                </h1>

                {/* Center Shirt Image - Positioned absolutely behind text or as a wrapper */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] z-10 opacity-90">
                    <img src="../../public/shirt1.webp" alt="Shirt" className="w-full" />

                    {/* Floating Badges */}
                    <div className="absolute top-10 -left-20 bg-white/10 backdrop-blur-sm border border-white/20 p-2 rounded-full text-[10px] flex items-center gap-2">
                        <span className="italic">Tough stains? We'll make your clothes flawless!</span>
                    </div>
                </div>

                {/* Floating Stats Card */}
                <div className="absolute right-12 bottom-20">
                    <StatsCard />
                </div>
            </main>

            {/* Footer Bar */}
            <footer className="absolute bottom-0 w-full bg-slate-900 text-white p-6 flex items-center justify-between rounded-t-[40px] mx-auto">
                <div className="flex items-center gap-4 ml-8">
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-gray-400 overflow-hidden">
                                <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                            </div>
                        ))}
                    </div>
                    <span className="text-xl font-semibold italic text-slate-300">5k+</span>
                </div>

                <button className="bg-white text-black px-8 py-3 rounded-xl flex items-center gap-4 mr-8 hover:bg-slate-200 transition">
                    Reserve Service <span className="text-lg">↗</span>
                </button>
            </footer>
        </section>
    );
}
