import {
  House,
  ChatCenteredDots,
  Scales,
  Database,
  ShoppingBag,
  Info,
  MapTrifold,
  Receipt,
  Question,
} from "@phosphor-icons/react";

const iconMap = {
  House,
  ChatCenteredDots,
  Scales,
  Database,
  ShoppingBag,
  Info,
  MapTrifold,
  Receipt,
};

export default function ServiceCard({ service }) {
  const { title, description, url, icon } = service;
  const IconComponent = iconMap[icon] || Question;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Buka ${title} di tab baru`}
      className="group relative flex flex-col items-center text-center p-6 bg-white border border-slate-200 rounded-2xl transition-all duration-150 hover:-translate-y-1 hover:border-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-1"
    >
      <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        <IconComponent size={28} weight="duotone" aria-hidden="true" />
      </div>
      <h3 className="text-sm md:text-base font-extrabold tracking-wider text-slate-900 mb-1.5 uppercase">
        {title}
      </h3>
      <p className="text-xs text-slate-500 line-clamp-1 leading-normal">
        {description}
      </p>
    </a>
  );
}
