import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ServiceGrid from './components/ServiceGrid';
import { services } from './data/services';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Header />

      <main className="flex-1 w-full">
        <Hero />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ServiceGrid services={services} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
