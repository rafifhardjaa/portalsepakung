export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm font-semibold text-slate-900">Pemerintah Kabupaten Semarang</p>
          <p className="text-xs text-slate-500">
            Jl. Diponegoro No. 14, Ungaran - 50511
          </p>
          <p className="text-xs text-slate-500">
            Telp:{" "}
            <a href="tel:0246921014" className="hover:text-blue-600 hover:underline">
              (024) 6921014
            </a>{" "}
            | Email:{" "}
            <a href="mailto:info@semarangkab.go.id" className="hover:text-blue-600 hover:underline">
              info@semarangkab.go.id
            </a>{" "}
            | WA:{" "}
            <a
              href="https://wa.me/6289673251295"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 hover:underline"
            >
              0896 7325 1295
            </a>
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-slate-100">
          <p className="text-[11px] text-slate-400">
            © {year} Pemerintah Kabupaten Semarang. Semua Hak Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
