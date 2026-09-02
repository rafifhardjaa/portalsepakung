import { SmileySad } from "@phosphor-icons/react";
import ServiceCard from "./ServiceCard";

export default function ServiceGrid({ services }) {
  if (!services || services.length === 0) {
    return (
      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">
          <div className="mx-auto w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
            <SmileySad size={24} weight="duotone" aria-hidden="true" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Layanan tidak ditemukan</h3>
          <p className="mt-1.5 text-xs text-slate-500">Coba kata kunci lain.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {services.map((svc) => (
          <ServiceCard key={svc.id} service={svc} />
        ))}
      </div>
    </div>
  );
}
