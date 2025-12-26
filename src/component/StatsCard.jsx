// import stack from "../assets/stack.webp";

export default function StatsCard() {
  return (
  <div className="bg-white/40 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 w-64 text-center">
    <img src="../../public/folded_shirts.webp" alt="Clothes" className="w-full object-cover mb-4 rounded-lg" />
    <h3 className="text-3xl font-bold text-slate-800">2.7k+</h3>
    <p className="text-base font-medium text-slate-600 mt-1 leading-tight uppercase tracking-wider">
      Just Trust Us — We'll Take Care of It
    </p>
  </div>
  );
}
