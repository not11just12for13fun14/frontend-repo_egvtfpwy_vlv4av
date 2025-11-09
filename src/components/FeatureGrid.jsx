import { Search, ShoppingCart, Mail, Info } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Search & browse books',
    desc: 'Simple search with clean listings so users can quickly find titles and authors.'
  },
  {
    icon: Info,
    title: 'Clear book details',
    desc: 'Price, delivery time, and descriptions upfront to reduce friction and build trust.'
  },
  {
    icon: ShoppingCart,
    title: 'Add to cart & order',
    desc: 'Minimal checkout that focuses on completion, not distractions.'
  },
  {
    icon: Mail,
    title: 'Order confirmation email',
    desc: 'A basic email receipt to reassure customers after purchase.'
  }
];

export default function FeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">MVP features that mattered</h2>
      <p className="mt-3 max-w-2xl text-slate-600">
        They shipped only what was essential to validate demand and deliver delight.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
