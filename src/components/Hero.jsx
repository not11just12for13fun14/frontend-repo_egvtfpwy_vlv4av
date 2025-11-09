import { Rocket, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-indigo-100">
              <Rocket className="h-5 w-5" />
              MVP Playbook
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              Flipkart’s MVP: A simple online bookstore that proved India would shop online
            </h1>
            <p className="mt-5 text-indigo-100/90">
              They started small: one category, a basic website, and manual fulfillment. The goal wasn’t perfection—it was
              validation. Learn the essentials they shipped and what they intentionally left out.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2">
                <BookOpen className="h-4 w-4" /> Single category: Books
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2">
                Manual fulfillment
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2">
                Cash on Delivery (later)
              </span>
            </div>
          </div>
          <div className="mt-6 w-full md:mt-0 md:w-auto">
            <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
              <p className="text-sm text-indigo-100">Core hypothesis</p>
              <p className="mt-2 text-lg font-semibold">
                “Will Indians trust buying products online?”
              </p>
              <p className="mt-3 text-indigo-100/90">
                The MVP was designed to answer this single question quickly and affordably.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
