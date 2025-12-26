export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-12 py-6 sticky w-full z-50">
            <div className="text-[1.6rem] font-semibold text-slate-800 flex items-center gap-2">
                Clean<span className="text-white -ml-2">Pro</span>
                <span className="relative flex flex-col gap-0.5">
                    <span className="w-4 h-4 bg-white rounded-full -ml-1.5"></span>
                    <span className="w-5 h-5 bg-white rounded-full -mt-3"></span>
                </span>
                <span className="w-3 h-3 bg-white rounded-full -mr-1 -mt-2"></span>
            </div>
            <div className="flex gap-8 text-[15px] font-medium text-slate-600">
                <a href="#" className="hover:text-black ">Services ▾</a>
                <a href="#" className="hover:text-black">Help</a>
                <a href="#" className="hover:text-black">Pricing ▾</a>
                <a href="#" className="hover:text-black">Recyclers</a>
            </div>
            <button className=" border-slate-800 rounded-xl border-[1.5px] px-8 py-2.5 flex items-center gap-2 hover:bg-slate-50 transition text-sm font-medium ">
                Get the App <img src="../../public/play-store-logo.svg"  alt="play-store-logo" className="h-5 m-auto ml-2"/>
            </button>
        </nav>
    );
}
