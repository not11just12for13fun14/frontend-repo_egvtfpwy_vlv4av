import { Star, ThumbsUp, Truck } from 'lucide-react';

export default function Outcome() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Outcome of the MVP</h2>
          <p className="mt-4 text-slate-600">
            Early wins created momentum: a first order from Assam, strong word-of-mouth, and eventually the addition of
            Cash on Delivery that unlocked massive adoption.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <Star className="mt-0.5 h-5 w-5 text-amber-500" />
              <span>Proved that customers would shop online in India</span>
            </li>
            <li className="flex items-start gap-3">
              <ThumbsUp className="mt-0.5 h-5 w-5 text-emerald-500" />
              <span>Grew through satisfaction, SEO, and reviews</span>
            </li>
            <li className="flex items-start gap-3">
              <Truck className="mt-0.5 h-5 w-5 text-blue-600" />
              <span>Built the foundation for logistics, then scaled categories</span>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-700">One-line summary</p>
          <p className="mt-2 text-lg text-slate-600">
            Flipkart’s MVP was a simple online bookstore that manually fulfilled orders to validate that Indians would shop
            online.
          </p>
        </div>
      </div>
    </section>
  );
}
