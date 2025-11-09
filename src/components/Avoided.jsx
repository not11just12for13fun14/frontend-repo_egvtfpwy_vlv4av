import { XCircle, Layers, Store, Warehouse } from 'lucide-react';

const avoided = [
  {
    icon: Layers,
    title: 'Multiple categories',
    reason: 'Unnecessary complexity without demand proof.'
  },
  {
    icon: Store,
    title: 'Seller marketplace',
    reason: 'Trust and logistics needed to come first.'
  },
  {
    icon: Warehouse,
    title: 'Inventory warehouses',
    reason: 'Too capital intensive for an MVP.'
  }
];

export default function Avoided() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center gap-2 text-slate-700">
          <XCircle className="h-5 w-5 text-rose-600" />
          <h2 className="text-2xl font-bold sm:text-3xl">What they intentionally avoided</h2>
        </div>
        <p className="mt-3 max-w-2xl text-slate-600">
          By trimming everything non-essential, they moved faster and learned sooner.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {avoided.map(({ icon: Icon, title, reason }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-rose-50 text-rose-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
