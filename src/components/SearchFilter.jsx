import { MagnifyingGlass } from "@phosphor-icons/react";

export default function SearchFilter({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative -mt-8 z-10 max-w-2xl mx-auto px-4 sm:px-6">
      <div className="relative">
        <MagnifyingGlass
          size={18}
          weight="regular"
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          aria-hidden="true"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari layanan..."
          aria-label="Cari layanan"
          className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-full text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
        />
      </div>
    </div>
  );
}
