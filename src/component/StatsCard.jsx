// import stack from "../assets/stack.webp";

export default function StatsCard() {
  return (
  <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl shadow-md border border-white/20 w-56 text-center">
    <img src="../../public/folded_shirts.webp" alt="Clothes" className="w-full object-cover mb-4 rounded-lg" />
    <h3 className="text-[2rem] font-semibold text-slate-900">2.7k+</h3>
    <p className="text-sm font-semibold text-slate-700 mt-1 leading-tight uppercase tracking-wider">
      Just Trust Us — <br/> We'll Take Care of It
    </p>
  </div>
  );
}
