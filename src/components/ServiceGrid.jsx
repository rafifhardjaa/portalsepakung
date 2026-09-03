import {
  Globe,
  MessageSquareShare,
  Gavel,
  Database,
  FileCheck2,
  Info,
  Map,
  Receipt,
  ArrowUpRight
} from 'lucide-react';

const iconMap = {
  Globe,
  MessageSquareShare,
  Gavel,
  Database,
  FileCheck2,
  Info,
  Map,
  Receipt,
};

export default function ServiceGrid({ services }) {
  if (services.length === 0) {
    return (
      <div className="text-center py-12 border border-dashed border-slate-300 rounded-xl bg-slate-50 text-slate-500">
        Layanan tidak ditemukan dengan kata kunci tersebut.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
      {services.map((service) => {
        const IconComponent = iconMap[service.icon] || Globe;
        return (
          <a
            key={service.id}
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Buka layanan ${service.title} di tab baru`}
            className="group relative flex flex-col justify-between p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-500/50 hover:-translate-y-0.5 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center text-slate-800 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-150">
                  <IconComponent className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-500 group-hover:text-blue-700">
                  {service.badge}
                </span>
              </div>
              <h3 className="text-base font-bold tracking-tight text-slate-900 group-hover:text-blue-700 flex items-center gap-1 transition-colors duration-150">
                {service.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-150" aria-hidden="true" />
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2">
                {service.desc}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-medium text-slate-500 group-hover:text-slate-700">
              Kunjungi Layanan &rarr;
            </div>
          </a>
        );
      })}
    </div>
  );
}