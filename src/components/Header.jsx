import { Phone } from "@phosphor-icons/react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[64px] md:h-[72px]">
          {/* Left: Logo & Instansi */}
          <div className="flex items-center gap-3">
            <img
              src="/img/logo.png"
              alt="Logo Pemerintah Kabupaten Semarang"
              className="h-10 w-10 md:h-11 md:w-11 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="flex flex-col leading-tight">
              <span className="text-sm md:text-[15px] font-extrabold text-slate-900 tracking-tight">
                Pemerintah Kabupaten Semarang
              </span>
              <span className="text-xs md:text-sm text-slate-500 font-medium">
                Portal Direktori Layanan Terpadu
              </span>
            </div>
          </div>

          {/* Right: Quick badge kontak bantuan */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="hidden md:inline text-xs text-slate-500 font-medium">
              Butuh bantuan?
            </span>
            <a
              href="tel:0246922020"
              aria-label="Hubungi Call Center"
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-blue-100 transition-colors"
            >
              <Phone size={16} weight="bold" aria-hidden="true" />
              <span className="hidden md:inline">Call Center 024-6922 020</span>
              <span className="md:hidden">Bantuan</span>
            </a>
          </div>

          {/* Mobile call badge icon only */}
          <a
            href="tel:0246922020"
            aria-label="Hubungi Call Center"
            className="sm:hidden inline-flex items-center justify-center bg-blue-50 text-blue-700 p-2.5 rounded-full hover:bg-blue-100 transition-colors"
          >
            <Phone size={18} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
