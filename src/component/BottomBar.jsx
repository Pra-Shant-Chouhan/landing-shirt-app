// import u1 from "../assets/users/u1.webp";
// import u2 from "../assets/users/u2.webp";

import { LeafIcon } from "lucide-react";

export default function BottomBar() {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-[var(--clean-dark)] text-white px-12 py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          <img src={LeafIcon} className="w-8 h-8 rounded-full border border-white" />
          <img src={LeafIcon} className="w-8 h-8 rounded-full border border-white" />
        </div>
        <span className="text-sm">5k+</span>
      </div>

      <button className="bg-white text-black px-6 py-3 rounded-full font-medium">
        Reserve Service →
      </button>
    </div>
  );
}
