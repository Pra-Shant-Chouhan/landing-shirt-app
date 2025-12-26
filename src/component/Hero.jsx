import Navbar from "./Navbar";
import StatsCard from "./StatsCard";
import BottomBar from "./BottomBar";
import folded_shirts from "../assets/folded_shirts.webp";

export default function Hero() {
    return (
        <section className="w-[1200px] h-[680px] hero-gradient hero-radius hero-shadow relative ">
            <Navbar />

            {/* CONTENT */}
            <div className="grid grid-cols-2 px-16 mt-16">
                {/* LEFT */}
                <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-4 text-[var(--clean-star)] text-xl">
                        ★★★★★
                    </div>

                    <h1 className="text-5xl font-bold leading-tight text-neutral-900">
                        The New <br />
                        Level of Care <br />
                        for Your Wardrobe
                    </h1>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative">
                    <img
                        src={folded_shirts}
                        alt="Clean Shirt"
                        className="absolute top-0 left-1/2 -translate-x-1/2 scale-110 select-none"
                    />
                </div>
            </div>

            <StatsCard />
            <BottomBar />
        </section>
    );
}
