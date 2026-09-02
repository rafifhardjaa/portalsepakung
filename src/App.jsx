import { useState, useMemo } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchFilter from "./components/SearchFilter";
import ServiceGrid from "./components/ServiceGrid";
import Footer from "./components/Footer";
import services from "./data/services";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return services;
    return services.filter(
      (svc) =>
        svc.title.toLowerCase().includes(q) || svc.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ServiceGrid services={filteredServices} />
      </main>
      <Footer />
    </div>
  );
}
