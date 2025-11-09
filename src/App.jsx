import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Avoided from './components/Avoided';
import Outcome from './components/Outcome';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <FeatureGrid />
      <Avoided />
      <Outcome />
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-500">
          Built as an MVP case study — start small, learn fast, scale smart.
        </div>
      </footer>
    </div>
  );
}
