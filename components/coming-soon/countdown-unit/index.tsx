interface CountdownUnitProps {
  value: number;
  label: string;
}

export function CountdownUnit({ value, label }: CountdownUnitProps) {
  return (
    <div className="flex flex-col items-center justify-center relative group">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/30 to-neutral-400/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>

      {/* Main container */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:scale-105">
        <span className="text-3xl md:text-5xl font-black text-white mb-1 leading-none">
          {String(value).padStart(2, "0")}
        </span>
        <span className="text-xs md:text-sm font-bold text-white/70 uppercase tracking-widest">
          {label}
        </span>

        {/* Corner accent */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full opacity-60"></div>
      </div>
    </div>
  );
}
