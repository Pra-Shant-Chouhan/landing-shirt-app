import Navbar from "./Navbar";
import StatsCard from "./StatsCard";
import BottomBar from "./BottomBar";
import Slogan from "./Slogan";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="w-[1200px] h-[680px] hero-gradient hero-radius hero-shadow relative overflow-hidden">
            <Navbar />
            <main className="container mx-auto px-12 pt-32 pb-40 relative">
                {/* Stars */}
                <div className="flex gap-1 mb-4 text-yellow-300 text-2xl">
                    {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>

                {/* Headline */}
                <h1 className="text-[4.8rem]  text-white drop-shadow-sm leading-[0.9] max-w-2xl relative  z-50 text-start flex flex-col">
                    <span >
                        The New
                    </span>
                    <span className="">
                        Level <span className="z-5"> of</span>  <span className="relative z-50">Care</span>
                    </span>
                    <span>
                        for Your
                    </span>
                    <span>
                        Wardrobe
                    </span>
                </h1>

                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] z-20 grid grid-rows-2 grid-cols-2">
                    {/* Floating Badges */}
                    <div className="absolute top-10 -left-20  p-2 rounded-full text-sm font-medium flex items-center gap-2">
                        <Slogan title="Tough stains? We'll make your clothes flawless!" />

                    </div>
                    {/* Floating Badges */}
                    <div className="absolute top-28 -right-20  p-2 rounded-full text-sm font-medium flex items-center gap-2">
                        <Slogan title="We'll Handle Any Stain - Guaranteed Removal" />

                    </div>
                </div>
                {/* Center Shirt Image - Positioned absolutely behind text or as a wrapper */}
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] z-10 opacity-90">
                    <img src="../../public/shirt1.webp" alt="Shirt" className="w-[80%]" />


                </div>

                {/* Floating Stats Card */}
                <div className="absolute right-12 bottom-40">
                    <StatsCard />
                </div>
            </main>

            {/* Footer Bar */}
            <footer className="absolute bottom-0 w-full bg-slate-900 text-white p-6 flex items-center justify-between rounded-b-[40px] mx-auto">
                <div className="flex items-center gap-4 ml-8">
                    <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((i, index) => {
                            // 👇 logic: first 3 go negative, rest positive
                            const marginLeft =
                                index <= 2
                                    ? -(index * 6)   // 0, -6, -12
                                    : (index - 2) * 8; // 8, 16, ...

                            return (
                                <div
                                    key={i}
                                    style={{ marginLeft }}
                                    className="w-10 h-10 rounded-xl border-2 border-slate-900 bg-gray-400 overflow-hidden"
                                >
                                    <img
                                        src={`https://i.pravatar.cc/150?u=${i}`}
                                        alt="user"
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <span className="text-[2rem] font-medium text-slate-300">5k+</span>
                </div>

                <button className="bg-white text-black mr-8 hover:bg-slate-200 transition rounded-xl border-[1.5px] px-8 py-2.5 flex items-center gap-2">
                    Reserve Service <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>

                </button>
            </footer>
        </section >
    );
}
